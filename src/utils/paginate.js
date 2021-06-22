import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  let startIndex = (pageNumber - 1) * pageSize;
  // _.slice(items, startIndex) // It will return item from 'startIndex' onward
  // _.take(pageSize) // It will return first 'n' items from given array. (n == pageSize)
  // To chain above two methods, first convert 'items' array to lodash wrapper
  // .value() will convert 'lodash wrapper object' to regular array
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
