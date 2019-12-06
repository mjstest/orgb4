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


TEST_CASE( "Test 01", "[Project07]" ) 
{
  minqueue<int, char> queue(100);
           
  REQUIRE(queue.empty());

  queue.pushinorder(123, 'r');
  queue.pushinorder(456, 'a');
  queue.pushinorder(789, 'h');

  REQUIRE(!queue.empty());

  REQUIRE(queue.minfront() == 456);
  queue.minpop();
  REQUIRE(queue.minfront() == 789);
  queue.minpop();
  REQUIRE(queue.minfront() == 123);
  queue.minpop();

  REQUIRE(queue.empty());
}
