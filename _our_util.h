/*util.h*/

#pragma once

#include <iostream>
#include <string>
#include <vector>
#include <map>

#include "_our_graph.h"

using namespace std;

void buildGraph(string filename, graph& g);
vector<char> BFS(graph& g, char startV);
vector<char> DFS(graph& g, char startV);
vector<char> Dijkstra(graph& g, char startV, map<char, int>& distances, map<char, char>& predecessors);
vector<char> Dijkstra2(graph& g, char startV, map<char, int>& distances, map<char, char>& predecessors);
