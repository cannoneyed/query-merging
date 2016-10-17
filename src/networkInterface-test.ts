  /* TODO REFACTOR
  describe('query merging', () => {
    it('should merge together queries when we call batchQuery()', (done) => {
      const query1 = gql`
        query authorStuff {
          author {
            name
          }
        }`;
      const query2 = gql`
        query cookieStuff {
          fortuneCookie
        }`;
      const composedQuery = gql`
        query ___composed {
          ___authorStuff___requestIndex_0___fieldIndex_0: author {
            name
          }
          ___cookieStuff___requestIndex_1___fieldIndex_0: fortuneCookie
        }`;
      const request1 = { query: query1 };
      const request2 = { query: query2 };

      const myNetworkInterface: NetworkInterface = {
        query(request: Request): Promise<GraphQLResult> {
          assert.equal(print(request.query), print(composedQuery));
          done();
          return new Promise((resolve, reject) => {
            // never resolve
          });
        },
      };
      const mergingNetworkInterface = addQueryMerging(myNetworkInterface);
      mergingNetworkInterface.batchQuery([request1, request2]);
    });

    it('should unpack merged query results when we call batchQuery()', (done) => {
      const query1 = gql`
        query authorStuff {
          author {
            name
          }
        }`;
      const query2 = gql`
        query cookieStuff {
          fortuneCookie
        }`;
      const composedQuery = gql`
        query ___composed {
          ___authorStuff___requestIndex_0___fieldIndex_0: author {
            name
          }
          ___cookieStuff___requestIndex_1___fieldIndex_0: fortuneCookie
        }`;
      const fortune = 'No snowflake in an avalanche feels responsible.';
      const result1 = {
        data: {
          author: {
            name: 'John Smith',
          },
        },
      };
      const result2 = {
        data: {
          fortuneCookie: fortune,
        },
      };
      const composedResult = {
        data: {
          ___authorStuff___requestIndex_0___fieldIndex_0: {
            name: 'John Smith',
          },
          ___cookieStuff___requestIndex_1___fieldIndex_0: fortune,
        },
      };
      const request1 = { query: query1 };
      const request2 = { query: query2 };

      const myNetworkInterface: NetworkInterface = {
        query(request: Request): Promise<GraphQLResult> {
          assert.equal(print(request.query), print(composedQuery));
          return Promise.resolve(composedResult);
        },
      };
      const mergingNetworkInterface = addQueryMerging(myNetworkInterface);
      mergingNetworkInterface.batchQuery([request1, request2]).then((results) => {
        assert.equal(results.length, 2);
        assert.deepEqual(results[0], result1);
        assert.deepEqual(results[1], result2);
        done();
      });
    });

    it('should not merge queries when batchQuery is passed a single query', () => {
      const query = gql`
        query {
          author {
            firstName
            lastName
          }
        }`;
      const data = {
        author: {
          firstName: 'John',
          lastName: 'Smith',
        },
      };
      const request = { query: query };
      const myNetworkInterface: NetworkInterface = {
        query(requestReceived: Request): Promise<GraphQLResult> {
          assert.equal(print(requestReceived.query), print(query));
          return Promise.resolve({ data });
        },
      };
      const mergingNetworkInterface = addQueryMerging(myNetworkInterface);
      mergingNetworkInterface.batchQuery([request]).then((results) => {
        assert.equal(results.length, 1);
        assert.deepEqual(results[0], { data });
      });
    });
  });
  */