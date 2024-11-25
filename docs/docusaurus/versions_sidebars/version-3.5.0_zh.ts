import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    "guide",
    {
      type: "category",
      label: "Tugraph 入门",
      items: [
        "introduction/what-is-graph",
        "introduction/what-is-gdbms",
        "introduction/what-is-tugraph",
        {
          type: "category",
          label: "快速上手",
          items: [
            "introduction/characteristics/performance-oriented",
            "introduction/characteristics/multi-level-Interfaces",
            "introduction/characteristics/htap",
          ],
        },
        "introduction/architecture",
        "introduction/functionality",
        "introduction/scenarios",
        "introduction/glossary",
      ],
    },
    {
      type: "category",
      label: "快速上手",
      items: [
        "quick-start/preparation",
        {
          type: "category",
          label: "demo 示例",
          items: [
            "quick-start/demo/movie",
            "quick-start/demo/wandering-earth",
            "quick-start/demo/the-three-body",
            "quick-start/demo/three-kingdoms",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "操作指南",
      items: ["user-guide/tugraph-browser"],
    },
    {
      type: "category",
      label: "用户手册",
      items: [
        {
          type: "category",
          label: "安装",
          items: [
            "developer-manual/installation/cloud-deployment",
            "developer-manual/installation/docker-deployment",
            "developer-manual/installation/local-package-deployment",
          ],
        },
        {
          type: "category",
          label: "运行",
          items: [
            "developer-manual/running/compile",
            "developer-manual/running/tugraph-running",
            "developer-manual/running/high-availability-mode",
          ],
        },
        {
          type: "category",
          label: "服务端工具",
          items: [
            "developer-manual/server-tools/data-import",
            "developer-manual/server-tools/data-export",
            "developer-manual/server-tools/backup-and-restore",
            "developer-manual/server-tools/data-warmup",
          ],
        },
        {
          type: "category",
          label: "客户端工具",
          items: [
            "developer-manual/client-tools/python-client",
            "developer-manual/client-tools/cpp-client",
            "developer-manual/client-tools/java-client",
            "developer-manual/client-tools/tugraph-ogm",
            "developer-manual/client-tools/tugraph-cli",
          ],
        },
        {
          type: "category",
          label: "生态工具",
          items: [
            "developer-manual/ecosystem-tools/monitoring",
            "developer-manual/ecosystem-tools/tugraph-datax",
            "developer-manual/ecosystem-tools/tugraph-explorer",
            "developer-manual/ecosystem-tools/log",
          ],
        },
        {
          type: "category",
          label: "编程接口",
          items: [
            "developer-manual/interface/cypher",
            {
              type: "category",
              label: "分析接口",
              items: [
                "developer-manual/interface/olap/tutorial",
                "developer-manual/interface/olap/olap-base-api",
                "developer-manual/interface/olap/olap-on-db-api",
                "developer-manual/interface/olap/olap-on-disk-api",
                "developer-manual/interface/olap/python-api",
                "developer-manual/interface/olap/algorithms",
              ],
            },
            {
              type: "category",
              label: "网络协议",
              items: [
                "developer-manual/interface/protocol/restful-api",
                "developer-manual/interface/protocol/rpc-api",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "测试与质量保证",
          items: [
            "developer-manual/quality/unit-testing",
            "developer-manual/quality/integration-testing",
          ],
        },
        {
          type: "category",
          label: "权限管理",
          items: ["developer-manual/other/privilege"],
        },
      ],
    },
    {
      type: "category",
      label: "开发者文档",
      items: [
        "community-manual/contributing",
        "community-manual/community-roles",
        "community-manual/individual-cla",
        "community-manual/roadmap",
      ],
    },
    {
      type: "category",
      label: "最佳实践",
      items: ["best-practices/rdbms-to-tugraph"],
    },
    "faq",
    "contacts",
  ],
};

export default sidebars;