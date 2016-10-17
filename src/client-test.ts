    /*
    // TODO REFACTOR
    it('should allow referencing named fragments with batching + merging turned on', (done) => {
      const personDetails = createFragment(gql`
        fragment personDetails on Person {
          firstName
          lastName
        }`);

      const query1 = gql`
        query personInfo {
          person {
            ...personDetails
          }
        }`;
      const query2 = gql`
        query authorPopularity {
          author {
            popularity
          }
        }`;

      const data1 = {
        person: {
          firstName: 'John',
          lastName: 'Smith',
        },
      };
      const data2 = {
        author: {
          popularity: 0.9,
        },
      };
      const composedQuery = gql`
        query ___composed {
          ___personInfo___requestIndex_0___fieldIndex_0: person {
            ...___personInfo___requestIndex_0___personDetails
          }

          ___authorPopularity___requestIndex_1___fieldIndex_0: author {
            popularity
          }
        }
        fragment ___personInfo___requestIndex_0___personDetails on Person {
          ___personInfo___requestIndex_0___fieldIndex_1: firstName
          ___personInfo___requestIndex_0___fieldIndex_2: lastName
        }`;
      const composedResult = {
        ___personInfo___requestIndex_0___fieldIndex_0: {
          ___personInfo___requestIndex_0___fieldIndex_1: 'John',
          ___personInfo___requestIndex_0___fieldIndex_2: 'Smith',
        },
        ___authorPopularity___requestIndex_1___fieldIndex_0: data2.author,
      };
      const networkInterface = addQueryMerging(mockNetworkInterface({
        request: { query: composedQuery, debugName: '___composed' },
        result: { data: composedResult },
      }));
      const client = new ApolloClient({
        networkInterface,
        shouldBatch: true,
      });
      const promise1 = client.query({ query: query1, fragments: personDetails });
      client.query({ query: query2 });
      promise1.then((result) => {
        assert.deepEqual(result.data, data1);
        done();
      });
    });
    */