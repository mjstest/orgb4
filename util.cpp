/*util.cpp*/

#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <set>
#include <map>
#include <string>
#include <fstream>
#include <limits>

#include "_our_graph.h"
#include "minqueue.h"
#include "_our_util.h"

using namespace std;


//
// buildGraph:
//
// Inputs the graph vertices and edges from the given file, building
// the graph g.  File format:
//   vertex vertex vertex ... #
//   src dest weight ... #
//
void buildGraph(string filename, graph& g)
{
  ifstream file(filename);
  char     v;

  if (!file.good())
  {
    cout << endl;
    cout << "**Error: unable to open input file '" << filename << "'." << endl;
    cout << endl;
    return;
  }

  //
  // Input vertices as single uppercase letters:  A B C ... #
  //
  file >> v;

  while (v != '#')
  {
    g.addvertex(v);

    file >> v;
  }

  //
  // Now input edges:  Src Dest Weight ... #
  //
  char src, dest;
  int  weight;

  file >> src;

  while (src != '#')
  {
    file >> dest;
    file >> weight;

    g.addedge(src, dest, weight);

    file >> src;
  }
}


//
// BFS:
//
// Performs a breadth-first search from the given starting vertex.  
// Returns the vertices in the order they were visited; startV will
// be first.
//
vector<char> BFS(graph& g, char startV)
{
  vector<char>  visited;
  queue<char>   frontierQueue;
  set<char>     discoveredSet;

  frontierQueue.push(startV);
  discoveredSet.insert(startV);

  while (!frontierQueue.empty())
  {
    char curV = frontierQueue.front();
    frontierQueue.pop();

    // cout << curV << endl;

    visited.push_back(curV);

    vector<char> adjacent = g.neighbors(curV);
    for (char adjV : adjacent)
    {
      if (discoveredSet.find(adjV) == discoveredSet.end())  // not in set:
      {
        frontierQueue.push(adjV);
        discoveredSet.insert(adjV);
      }
    }
  }

  return visited;
}


//
// DFS:
//
// Performs a depth-first search from the given starting vertex.  
// Returns the vertices in the order they were visited; startV will
// be first.
//
vector<char> DFS(graph& g, char startV)
{
  vector<char>  visited;
  stack<char>   frontierStack;
  set<char>     visitedSet;

  frontierStack.push(startV);

  while (!frontierStack.empty())
  {
    char curV = frontierStack.top();
    frontierStack.pop();

    // cout << curV << endl;

    if (visitedSet.find(curV) == visitedSet.end())  // not in set:
    {
      visited.push_back(curV);
      visitedSet.insert(curV);

      vector<char> adjacent = g.neighbors(curV);

      for (char adjV : adjacent)
        frontierStack.push(adjV);
    }
  }//while

  return visited;
}


//
// Dijkstra:
//
vector<char> Dijkstra(graph& g, char startV, map<char, int>& distances, map<char, char>& predecessors)
{
  vector<char>         visited;
  minqueue<char, int>  unvisitedQueue(26);

  //
  // initialize data structures are per Dijkstra's alg:
  //
  const int INF = numeric_limits<int>::max();

  vector<char> vertices = g.vertices();
  for (char v : vertices)
  {
    unvisitedQueue.pushinorder(v, INF);
    distances[v] = INF;
    predecessors[v] = 0;
  }

  //
  // run algorithm from starting vertex:
  //
  unvisitedQueue.pushinorder(startV, 0);  // update distance to be min in queue:
  distances[startV] = 0;

  while (!unvisitedQueue.empty())
  {
    //
    // We need to pop the vertex from the queue with the *minimum* distance:
    //
    char curV = unvisitedQueue.minfront();
    unvisitedQueue.minpop();

    // is curV reachable from src?  If not, there's no point in continuing alg:
    if (distances[curV] == INF)
      break;

    visited.push_back(curV);

    // visit adjacent nodes:
    vector<char> adjacent = g.neighbors(curV);
    for (char adjV : adjacent)
    {
      int weight = g.getweight(curV, adjV);
      int altDist = distances[curV] + weight;

      if (altDist < distances[adjV])  // found a less-expensive path:
      {
        distances[adjV] = altDist;
        predecessors[adjV] = curV;

        unvisitedQueue.pushinorder(adjV, altDist);  // update and reorder queue:
      }
    }

  }//while

  return visited;
}

vector<char> Dijkstra2(graph& g, char startV, map<char, int>& distances, map<char, char>& predecessors)
{
  vector<char>  visited;

  //
  // initialize data structures are per Dijkstra's alg:
  //
  const int INF = numeric_limits<int>::max();

  vector<char> vertices = g.vertices();
  for (char v : vertices)
  {
    distances[v] = INF;
    predecessors[v] = 0;
  }

  // optimize use of queue by filling in O(N) time:
  minqueue<char, int>  unvisitedQueue(vertices, INF);

  //
  // run algorithm from starting vertex:
  //
  unvisitedQueue.pushinorder(startV, 0);  // update distance to be min in queue:
  distances[startV] = 0;

  while (!unvisitedQueue.empty())
  {
    //
    // We need to pop the vertex from the queue with the *minimum* distance:
    //
    char curV = unvisitedQueue.minfront();
    unvisitedQueue.minpop();

    // is curV reachable from src?  If not, there's no point in continuing alg:
    if (distances[curV] == INF)
      break;

    visited.push_back(curV);

    // visit adjacent nodes:
    vector<char> adjacent = g.neighbors(curV);
    for (char adjV : adjacent)
    {
      int weight = g.getweight(curV, adjV);
      int altDist = distances[curV] + weight;

      if (altDist < distances[adjV])  // found a less-expensive path:
      {
        distances[adjV] = altDist;
        predecessors[adjV] = curV;

        unvisitedQueue.pushinorder(adjV, altDist);  // update and reorder queue:
      }
    }

  }//while

  return visited;
}

