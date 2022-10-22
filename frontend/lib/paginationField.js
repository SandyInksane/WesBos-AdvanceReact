import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we wil take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      const items = existing.slice(skip, skip + first).filter((x) => x); // filter out undefined items
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // we don't have anyitems, we must fetch from network
        return false; // we looked in the cache, there are none, go to the network
      }
      if (items.length) {
        return items;
      }
      return false;
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      console.log(`Merging items from the netwrok ${incoming.lenth}`);
      const merged = existing ? existing.slice(0) : [];
      merged.push(incoming);
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
      // na merge, komt auto read terug. dus: merge, read, merge
    },
  };
}
