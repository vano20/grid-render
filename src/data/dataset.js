module.exports = {
  data: {
    rows: [
      {
        order: 1,
        defaultWide: 12,
        child: [
          {
            order: 1,
            content: 'row 1 col 1',
            defaultWide: 12,
          },
          {
            order: 2,
            content: 'row 1 col 2',
            defaultWide: 12,
          },
        ],
      },
      {
        order: 2,
        defaultWide: 12,
        child: [
          {
            order: 1,
            content: 'row 2 col 1',
            defaultWide: 6,
          },
          {
            order: 2,
            defaultWide: 6,
            child: [
              {
                order: 1,
                content: 'row 2.2 col 1',
                defaultWide: 12,
              },
              {
                order: 2,
                content: 'row 2.2 col 2',
                defaultWide: 12,
              },
              {
                order: 3,
                content: 'row 2.2 col 3',
                defaultWide: 12,
              },
            ],
          },
        ],
      },
      {
        order: 3,
        defaultWide: 12,
        child: [
          {
            order: 1,
            content: 'row 3 col 1',
            defaultWide: 6,
          },
          {
            order: 2,
            defaultWide: 6,
            child: [
              {
                order: 1,
                defaultWide: 12,
                child: [
                  {
                    order: 1,
                    content: '',
                    defaultWide: 1,
                  },
                  {
                    order: 2,
                    content: 'row 3.2 col 1',
                    defaultWide: 8,
                  },
                  {
                    order: 3,
                    content: '',
                    defaultWide: 3,
                  },
                ],
              },
              {
                order: 2,
                content: 'row 3.2 col 2',
                defaultWide: 12,
              },
              {
                order: 3,
                content: 'row 3.2 col 3',
                defaultWide: 12,
              },
            ],
          },
        ],
      },
    ],
  },
}
