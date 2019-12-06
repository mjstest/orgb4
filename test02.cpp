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

#include "minqueue.h"
#include "catch.hpp"

using namespace std;


TEST_CASE("Test 02", "[Project07]")
{
  vector<int>  keys = { 123, 456, 789, 1234, 5678, 91011 };
  char  initialValue = '#';

  minqueue<int, char> queue(keys, initialValue);
           
  REQUIRE(!queue.empty());

  REQUIRE(queue.minfront() == 123);
  queue.minpop();
  REQUIRE(queue.minfront() == 456);
  queue.minpop();
  REQUIRE(queue.minfront() == 789);
  queue.minpop();
  REQUIRE(queue.minfront() == 1234);
  queue.minpop();
  REQUIRE(queue.minfront() == 5678);
  queue.minpop();
  REQUIRE(queue.minfront() == 91011);
  queue.minpop();

  REQUIRE(queue.empty());
}
