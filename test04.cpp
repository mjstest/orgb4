//
// Prof. Joe Hummel
// U. of Illinois, Chicago
// CS 251, Fall 2019
// Project #07: minqueue
// 

#include <iostream>
#include <string>
#include <cstdlib>
#include <cmath>
#include <map>

#include "minqueue.h"
#include "catch.hpp"

#include "_our_graph.h"
#include "_our_util.h"

using namespace std;


TEST_CASE("Test 04: Dijkstra", "[Project07]")
{
  graph  g;
  buildGraph("graph5.txt", g);

  map<char, int>  distances;
  map<char, char> predecessors;
  vector<char>  V;

  V = Dijkstra(g, 'G', distances, predecessors);

  REQUIRE(V[0] == 'G');
  REQUIRE(V[1] == 'H');
  REQUIRE(V[2] == 'L');
  REQUIRE(V[3] == 'K');
  REQUIRE(V[4] == 'W');
  REQUIRE(V[5] == 'X');
  REQUIRE(V[6] == 'Y');
  REQUIRE(V[7] == 'Z');

  V = Dijkstra(g, 'A', distances, predecessors);

  REQUIRE(V[0] == 'A');
  REQUIRE(V[1] == 'B');
  REQUIRE(V[2] == 'D');
  REQUIRE(V[3] == 'C');
  REQUIRE(V[4] == 'E');
  REQUIRE(V[5] == 'K');
  REQUIRE(V[6] == 'F');
  REQUIRE(V[7] == 'L');

  V = Dijkstra(g, 'F', distances, predecessors);

  REQUIRE(V[0] == 'F');
  REQUIRE(V[1] == 'L');
  REQUIRE(V[2] == 'K');
  REQUIRE(V[3] == 'D');
  REQUIRE(V[4] == 'C');
  REQUIRE(V[5] == 'B');
  REQUIRE(V[6] == 'E');
  REQUIRE(V[7] == 'A');

  V = Dijkstra2(g, 'G', distances, predecessors);

  REQUIRE(V[0] == 'G');
  REQUIRE(V[1] == 'H');
  REQUIRE(V[2] == 'L');
  REQUIRE(V[3] == 'K');
  REQUIRE(V[4] == 'W');
  REQUIRE(V[5] == 'X');
  REQUIRE(V[6] == 'Y');
  REQUIRE(V[7] == 'Z');

  V = Dijkstra2(g, 'A', distances, predecessors);

  REQUIRE(V[0] == 'A');
  REQUIRE(V[1] == 'B');
  REQUIRE(V[2] == 'D');
  REQUIRE(V[3] == 'C');
  REQUIRE(V[4] == 'E');
  REQUIRE(V[5] == 'K');
  REQUIRE(V[6] == 'F');
  REQUIRE(V[7] == 'L');

  V = Dijkstra2(g, 'F', distances, predecessors);

  REQUIRE(V[0] == 'F');
  REQUIRE(V[1] == 'L');
  REQUIRE(V[2] == 'K');
  REQUIRE(V[3] == 'D');
  REQUIRE(V[4] == 'C');
  REQUIRE(V[5] == 'B');
  REQUIRE(V[6] == 'E');
  REQUIRE(V[7] == 'A');
}
