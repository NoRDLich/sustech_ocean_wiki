import pages from "../pages.ts";

export const getPathMapping = () => {
  return pages.reduce<{
    [key: string]: {
      name: string | undefined;
      title?: string | undefined; // 改为可选
      component: React.FC;
      lead?: string | undefined; // 改为可选
    };
  }>((map, item) => {
    if ("path" in item && item.path && item.component) {
      // 如果是首页，不传递 title 和 lead
      if (item.path === "/") {
        map[item.path] = {
          name: item.name,
          component: item.component,
        };
      } else {
        map[item.path] = {
          name: item.name,
          title: item.title,
          component: item.component,
          lead: item.lead,
        };
      }
    } else if ("folder" in item && item.folder) {
      item.folder.forEach((page) => {
        if (page.path && page.component) {
          map[page.path] = {
            name: page.name,
            title: page.title,
            component: page.component,
            lead: page.lead,
          };
        }
      });
    }
    return map;
  }, {});
};
