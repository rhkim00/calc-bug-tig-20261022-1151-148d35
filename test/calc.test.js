import { test } from "node:test";
import assert from "node:assert/strict";
import { add, average } from "../src/calc.js";

test("add adds", () => assert.equal(add(2, 3), 5));
test("average of three numbers", () => assert.equal(average([1, 2, 3]), 2));
