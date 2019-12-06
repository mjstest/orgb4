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
#include <vector>
#include <set>
#include <algorithm>
#include <limits>
#include <random>

#include "minqueue.h"
#include "catch.hpp"

using namespace std;


TEST_CASE( "Test 08: stress test #3", "[Project07]" ) 
{
  //
  // StressTest #3:
  //
  // The idea is to push and pop with a large # of vertices to
  // reveal inefficient solutions.  This test uses random values
  // so we test random pushes, and then we follow with updating
  // these to test random updates:
  //
  int N = 500000;
  minqueue<int, int> pq(N);

  const int MAX = numeric_limits<int>::max();

  uniform_int_distribution<int> dis(1, MAX);
  mt19937 gen;

  //
  // generate N random, distinct distances:
  //
  vector<pair<int, int>> randomPairs;
  set<int> S;

  for (int v = 0; v < N; ++v)
  {
    int d = dis(gen);  // gen a random distance:

    while (S.find(d) != S.end())  // we need a unique distance:
      d = dis(gen);

    S.insert(d);

    pair<int, int> p(v, d);
    randomPairs.push_back(p);
  }

  //
  // now insert the pairs into the priority queue:
  //
  for (pair<int, int> p : randomPairs)
  {
    pq.pushinorder(p.first, p.second);
  }

  //
  // now let's generate another set of random distances for the same 
  // verties, which will cause updates:
  //
  randomPairs.clear();
  S.clear();

  for (int v = 0; v < N; ++v)
  {
    int d = dis(gen);  // gen a random distance:

    while (S.find(d) != S.end())  // we need a unique distance:
      d = dis(gen);

    S.insert(d);

    pair<int, int> p(v, d);
    randomPairs.push_back(p);
  }

  for (pair<int, int> p : randomPairs)
  {
    pq.pushinorder(p.first, p.second);
  }

  //
  // and another set of updates:
  //
  randomPairs.clear();
  S.clear();

  for (int v = N-1; v >= 0; --v)
  {
    int d = dis(gen);  // gen a random distance:

    while (S.find(d) != S.end())  // we need a unique distance:
      d = dis(gen);

    S.insert(d);

    pair<int, int> p(v, d);
    randomPairs.push_back(p);
  }

  for (pair<int, int> p : randomPairs)
  {
    pq.pushinorder(p.first, p.second);
  }

  //
  // sort the pairs so we know what to expect when we pop:
  //
  sort(randomPairs.begin(), randomPairs.end(),
    [](pair<int, int>& p1, pair<int, int>& p2)
    {
      if (p1.second < p2.second)  // sort by distance, ascending:
        return true;
      else
        return false;
    }
  );

  //
  // now let's pop them all and make sure we get the
  // correct distance:
  //
  for (int i = 0; i < N; ++i)
  {
    int v = pq.minfront();
    pq.minpop();

    int expectedV = randomPairs[i].first;

    REQUIRE(v == expectedV);
  }

  REQUIRE(pq.empty());
}
