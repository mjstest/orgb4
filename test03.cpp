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


TEST_CASE( "Test 03", "[Project07]" ) 
{
  minqueue<int, int> queue(20);
  vector<int> values;
           
  REQUIRE(queue.empty());

  //
  // push in 20 values (capacity):
  //
  for (int i = 0; i < 9; ++i)
  {
    int value = 1000 - (50 * i);
    queue.pushinorder(-value, value);

    values.push_back(value);
  }

  queue.pushinorder(100, -100);

  for (int i = 1; i < 10; ++i)
  {
    int value = 1000 - (31 * i);
    queue.pushinorder(-value, value);

    values.push_back(value);
  }

  queue.pushinorder(200, -200);

  // 
  // let's pop a couple out:
  //
  REQUIRE(queue.minfront() == 200);
  queue.minpop();
  REQUIRE(queue.minfront() == 100);
  queue.minpop();

  //
  // now put a couple back in:
  //
  queue.pushinorder(-951, 951);
  values.push_back(951);
  queue.pushinorder(-123, 123);
  values.push_back(123);

  //
  // now make sure all 20 are there, in correct order:
  //
  REQUIRE(!queue.empty());

  std::sort(values.begin(), values.end());

  for (int i = 0; i < 20; ++i)
  {
    REQUIRE(queue.minfront() == (-values[i]));
    queue.minpop();
  }
  
  REQUIRE(queue.empty());
}
