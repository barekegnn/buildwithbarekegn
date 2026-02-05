// Mock for next-mdx-remote/serialize
module.exports = {
  serialize: jest.fn(async (content) => {
    return {
      compiledSource: `mock-compiled-${content.substring(0, 20)}`,
      scope: {},
      frontmatter: {},
    };
  }),
};
