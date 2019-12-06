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
#include <algorithm>

#include "minqueue.h"
#include "catch.hpp"

using namespace std;


TEST_CASE( "Test 06: stress test #1", "[Project07]" ) 
{
  //
  // StressTest #1:
  //
  // The idea is to push and pop with a large # of vertices to
  // reveal inefficient solutions.  This test just pushes and
  // then pops them all.
  //
  int N = 500000;
  minqueue<int, int> pq(N);

  int distance = N;

  //
  // let's insert all the vertices, with successive vertices
  // having smaller distances (and so moving to the front of
  // the queue):
  //
  for (int v = 0; v < N; ++v)
  {
    pq.pushinorder(v, distance);
    distance--;
  }

  //
  // now let's pop them all and make sure we get the
  // correct distance:
  //
  int expectedV = N - 1;

  for (int i = 0; i < N; ++i)
  {
    int v = pq.minfront();
    pq.minpop();

    REQUIRE(v == expectedV);

    expectedV--;
  }

  REQUIRE(pq.empty());
}
