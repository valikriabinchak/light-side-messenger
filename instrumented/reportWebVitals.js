function cov_20dab5yqg9() {
  var path = "D:\\Web\\ReactCourse\\training-react\\src\\reportWebVitals.js";
  var hash = "ad889a60bd081d5cd2629691a57f466daff85123";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\Web\\ReactCourse\\training-react\\src\\reportWebVitals.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 4
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "2": {
        start: {
          line: 3,
          column: 8
        },
        end: {
          line: 9,
          column: 11
        }
      },
      "3": {
        start: {
          line: 4,
          column: 12
        },
        end: {
          line: 4,
          column: 32
        }
      },
      "4": {
        start: {
          line: 5,
          column: 12
        },
        end: {
          line: 5,
          column: 32
        }
      },
      "5": {
        start: {
          line: 6,
          column: 12
        },
        end: {
          line: 6,
          column: 32
        }
      },
      "6": {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 7,
          column: 32
        }
      },
      "7": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 8,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1,
            column: 41
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 34
          },
          end: {
            line: 3,
            column: 35
          }
        },
        loc: {
          start: {
            line: 3,
            column: 83
          },
          end: {
            line: 9,
            column: 9
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 2,
            column: 8
          },
          end: {
            line: 2,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 2,
            column: 8
          },
          end: {
            line: 2,
            column: 19
          }
        }, {
          start: {
            line: 2,
            column: 23
          },
          end: {
            line: 2,
            column: 54
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ad889a60bd081d5cd2629691a57f466daff85123"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20dab5yqg9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_20dab5yqg9();
cov_20dab5yqg9().s[0]++;
const reportWebVitals = onPerfEntry => {
  cov_20dab5yqg9().f[0]++;
  cov_20dab5yqg9().s[1]++;
  if ((cov_20dab5yqg9().b[1][0]++, onPerfEntry) && (cov_20dab5yqg9().b[1][1]++, onPerfEntry instanceof Function)) {
    cov_20dab5yqg9().b[0][0]++;
    cov_20dab5yqg9().s[2]++;
    import("web-vitals").then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      cov_20dab5yqg9().f[1]++;
      cov_20dab5yqg9().s[3]++;
      getCLS(onPerfEntry);
      cov_20dab5yqg9().s[4]++;
      getFID(onPerfEntry);
      cov_20dab5yqg9().s[5]++;
      getFCP(onPerfEntry);
      cov_20dab5yqg9().s[6]++;
      getLCP(onPerfEntry);
      cov_20dab5yqg9().s[7]++;
      getTTFB(onPerfEntry);
    });
  } else {
    cov_20dab5yqg9().b[0][1]++;
  }
};
export default reportWebVitals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjBkYWI1eXFnOSIsImFjdHVhbENvdmVyYWdlIiwicyIsInJlcG9ydFdlYlZpdGFscyIsIm9uUGVyZkVudHJ5IiwiZiIsImIiLCJGdW5jdGlvbiIsInRoZW4iLCJnZXRDTFMiLCJnZXRGSUQiLCJnZXRGQ1AiLCJnZXRMQ1AiLCJnZXRUVEZCIl0sInNvdXJjZXMiOlsicmVwb3J0V2ViVml0YWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IChvblBlcmZFbnRyeSkgPT4ge1xyXG4gICAgaWYgKG9uUGVyZkVudHJ5ICYmIG9uUGVyZkVudHJ5IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICBpbXBvcnQoXCJ3ZWItdml0YWxzXCIpLnRoZW4oKHsgZ2V0Q0xTLCBnZXRGSUQsIGdldEZDUCwgZ2V0TENQLCBnZXRUVEZCIH0pID0+IHtcclxuICAgICAgICAgICAgZ2V0Q0xTKG9uUGVyZkVudHJ5KTtcclxuICAgICAgICAgICAgZ2V0RklEKG9uUGVyZkVudHJ5KTtcclxuICAgICAgICAgICAgZ2V0RkNQKG9uUGVyZkVudHJ5KTtcclxuICAgICAgICAgICAgZ2V0TENQKG9uUGVyZkVudHJ5KTtcclxuICAgICAgICAgICAgZ2V0VFRGQihvblBlcmZFbnRyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXBvcnRXZWJWaXRhbHM7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQUFBQSxjQUFBLEdBQUFFLENBQUE7QUFmWixNQUFNQyxlQUFlLEdBQUlDLFdBQVcsSUFBSztFQUFBSixjQUFBLEdBQUFLLENBQUE7RUFBQUwsY0FBQSxHQUFBRSxDQUFBO0VBQ3JDLElBQUksQ0FBQUYsY0FBQSxHQUFBTSxDQUFBLFVBQUFGLFdBQVcsTUFBQUosY0FBQSxHQUFBTSxDQUFBLFVBQUlGLFdBQVcsWUFBWUcsUUFBUSxHQUFFO0lBQUFQLGNBQUEsR0FBQU0sQ0FBQTtJQUFBTixjQUFBLEdBQUFFLENBQUE7SUFDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDTSxJQUFJLENBQUMsQ0FBQztNQUFFQyxNQUFNO01BQUVDLE1BQU07TUFBRUMsTUFBTTtNQUFFQyxNQUFNO01BQUVDO0lBQVEsQ0FBQyxLQUFLO01BQUFiLGNBQUEsR0FBQUssQ0FBQTtNQUFBTCxjQUFBLEdBQUFFLENBQUE7TUFDdkVPLE1BQU0sQ0FBQ0wsV0FBVyxDQUFDO01BQUNKLGNBQUEsR0FBQUUsQ0FBQTtNQUNwQlEsTUFBTSxDQUFDTixXQUFXLENBQUM7TUFBQ0osY0FBQSxHQUFBRSxDQUFBO01BQ3BCUyxNQUFNLENBQUNQLFdBQVcsQ0FBQztNQUFDSixjQUFBLEdBQUFFLENBQUE7TUFDcEJVLE1BQU0sQ0FBQ1IsV0FBVyxDQUFDO01BQUNKLGNBQUEsR0FBQUUsQ0FBQTtNQUNwQlcsT0FBTyxDQUFDVCxXQUFXLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztJQUFBSixjQUFBLEdBQUFNLENBQUE7RUFBQTtBQUNMLENBQUM7QUFFRCxlQUFlSCxlQUFlIiwiaWdub3JlTGlzdCI6W119