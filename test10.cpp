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


TEST_CASE( "Test 10", "[Project07]" ) 
{
  minqueue<int, int> queue(49);
  minqueue<string, string> testing(100);
  
  vector<string> Vtesting2 = {"abc", "def", "jkl"};
  minqueue<string, int> testing2(Vtesting2, 0);

  vector<int> values;
           
  REQUIRE(queue.empty());
  REQUIRE(testing.empty());
  REQUIRE(!testing2.empty());

  testing.pushinorder("key", "value");
  testing.pushinorder("key2", "apple");
  testing.pushinorder("key3", "pizza");

  REQUIRE(!testing.empty());

  string s = testing.minfront();
  testing.minpop();
  REQUIRE(s == "key2");
  s = testing.minfront();
  testing.minpop();
  REQUIRE(s == "key3");
  s = testing.minfront();
  testing.minpop();
  REQUIRE(s == "key");

  REQUIRE(testing.empty());

  //
  // some calculated pushes and pops:
  //
  queue.pushinorder(10, 100);
  queue.pushinorder(9, 200);
  queue.pushinorder(8, 300);
  queue.pushinorder(7, 400);
  queue.pushinorder(6, 500);
  queue.pushinorder(5, 450);
  queue.pushinorder(4, 50);

  int k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 4);

  queue.pushinorder(9, 49);
  queue.pushinorder(3, 52);
  queue.pushinorder(2, 48);
  queue.pushinorder(1, 499);

  queue.pushinorder(11, 510);
  queue.pushinorder(12, 520);
  queue.pushinorder(13, 320);
  queue.pushinorder(14, 310);
  queue.pushinorder(15, 115);
  queue.pushinorder(16, 125);
  queue.pushinorder(16, 124);
  queue.pushinorder(16, 123);
  queue.pushinorder(16, 122);
  queue.pushinorder(16, 121);

  queue.pushinorder(8, 460);
  queue.pushinorder(9, 47);
  queue.pushinorder(13, 45);
  queue.pushinorder(1, 991);
  queue.pushinorder(3, 46);
  queue.pushinorder(17, 43);
  queue.pushinorder(18, 992);
  queue.pushinorder(19, 375);
  queue.pushinorder(20, 44);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 17);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 20);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 13);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 3);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 9);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 2);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 10);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 15);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 16);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 14);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 19);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 7);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 5);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 8);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 6);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 11);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 12);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 1);

  k = queue.minfront();
  queue.minpop();
  REQUIRE(k == 18);

  REQUIRE(queue.empty());
}
