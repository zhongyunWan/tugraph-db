"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53086],{30116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453);const r={},a="OlapBase API",l={id:"developer-manual/interface/olap/olap-base-api",title:"OlapBase API",description:"This document will introduce how to use the OlapBase API",source:"@site/versions/version-3.5.1/en-US/source/5.developer-manual/6.interface/2.olap/2.olap-base-api.md",sourceDirName:"5.developer-manual/6.interface/2.olap",slug:"/developer-manual/interface/olap/olap-base-api",permalink:"/tugraph-db/en-US/en/3.5.1/developer-manual/interface/olap/olap-base-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bootstrap program",permalink:"/tugraph-db/en-US/en/3.5.1/developer-manual/interface/olap/tutorial"},next:{title:"OlapOnDB API",permalink:"/tugraph-db/en-US/en/3.5.1/developer-manual/interface/olap/olap-on-db-api"}},o={},d=[{value:"1.The overview",id:"1the-overview",level:2},{value:"2.Configuration requirements",id:"2configuration-requirements",level:2},{value:"3.Atomic operations",id:"3atomic-operations",level:2},{value:"4.Vertex Class ParallelBitset",id:"4vertex-class-parallelbitset",level:2},{value:"4.1ParallelBitset Class",id:"41parallelbitset-class",level:3},{value:"5.Vertex Array Class ParallelVector",id:"5vertex-array-class-parallelvector",level:2},{value:"5.1.ParallelVector Class",id:"51parallelvector-class",level:3},{value:"6.Customize data structures",id:"6customize-data-structures",level:2},{value:"6.1.Basic data types",id:"61basic-data-types",level:3},{value:"6.2.Combining data structures",id:"62combining-data-structures",level:3},{value:"7.Graph class OlapBase",id:"7graph-class-olapbase",level:2},{value:"7.1.Basic Information",id:"71basic-information",level:3},{value:"7.2.node sets and edge sets and their related operations",id:"72node-sets-and-edge-sets-and-their-related-operations",level:3},{value:"7.3.Locking mechanism",id:"73locking-mechanism",level:3},{value:"7.4.Batch Processing Operations",id:"74batch-processing-operations",level:3}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"olapbase-api",children:"OlapBase API"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This document will introduce how to use the OlapBase API"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"1the-overview",children:"1.The overview"}),"\n",(0,i.jsx)(t.p,{children:"This manual will introduce the configuration of the TuGraph graph computing system. Combined with the code, several important files and interfaces in TuGraph are introduced."}),"\n",(0,i.jsx)(t.h2,{id:"2configuration-requirements",children:"2.Configuration requirements"}),"\n",(0,i.jsx)(t.p,{children:"To develop and compile applications using the TuGraph graph computing system, the configuration required:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"linux operating system, currently running successfully on Ubuntu16.04.2 and Centos7 systems."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Compiler that supports C++ 14, requires GCC version 5.4.1 or later."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"3atomic-operations",children:"3.Atomic operations"}),"\n",(0,i.jsx)(t.p,{children:"TuGraph uses multi-threading technology for batch operations, in which case memory access conflicts may occur. In order to ensure the correctness of modification operations in parallel computing, TuGraph implements atomic operations. The code section can be found in the lgraph_atomic.cpp file under the lgraph folder."}),"\n",(0,i.jsx)(t.p,{children:'TuGraph also customizes 4 commonly used atomic operations. When we need to modify the data of vertices in multithreaded mode, we should use atomic operations to ensure the correctness of the modification operation in parallel environment. In addition to these four atomic operations, users can also use "cas" to build their own atomic operation functions.'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bool cas(T \\* ptr, T oldv, T newv)"})," : If the value pointed to by ptr is equal to oldv, the value pointed to by ptr is assigned to newv and returns true. Otherwise, false is returned"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bool write_min(T \\*a, T b)"})," : If b is smaller than the value pointed to by a, then assign the value pointed to by a to b and return true, otherwise return false."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bool write_max(T \\*a, T b)"})," : If b is larger than the value pointed to by a, then assign the value pointed to by a to b and return true, otherwise return false."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void write_add(T \\*a, T b)"})," : adds the value of b to the value pointed to by a."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void write_sub(T \\*a, T b)"})," : subtract the value of b from the value pointed to by a."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"4vertex-class-parallelbitset",children:"4.Vertex Class ParallelBitset"}),"\n",(0,i.jsx)(t.p,{children:"When using TuGraph for batch operations, you need to use a vertex set to represent the vertices you want to process. ParallelBitset implements a vertex collection class that represents vertices in bits and thus saves a significant amount of memory. The corresponding code can be found in the olap_base.h file in the lgraph folder."}),"\n",(0,i.jsx)(t.h3,{id:"41parallelbitset-class",children:"4.1ParallelBitset Class"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"size_t Size()"}),"\uff1aIndicates the number of vertices in the Bitmap."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ParallelBitset(size_t size)"}),"\uff1aInitialize size and data, the length of data is (size >> 6)+1."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void Clear()"}),"\uff1aclears the collection."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void Fill()"}),"\uff1aadd all vertices to the set."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bool Has(size_t i)"}),"\uff1acheck if vertex i is in the set."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bool Add(size_t i)"}),"\uff1aadd vertex i to the set."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void Swap(ParallelBitset &other)"}),"\uff1aexchange elements with another set of ParallelBitset."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"5vertex-array-class-parallelvector",children:"5.Vertex Array Class ParallelVector"}),"\n",(0,i.jsx)(t.p,{children:"When using TuGraph for batch operations, you need to use an array of vertices to represent the result of processing vertices. ParallelVector implements the vertex array class. The corresponding code can be found in the olap_base.h file in the lgraph folder."}),"\n",(0,i.jsx)(t.h3,{id:"51parallelvector-class",children:"5.1.ParallelVector Class"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ParallelVector(size_t capacity)"})," Builds ParallelVector. capacity is the initial size of the vertex array"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"T& operator[](size_t i)"})," : data with subscript i"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"T \\*begin()"})," : ParallelVector the starting pointer"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"T \\*end()"})," : ParallelVector the end pointer to Parallelvector. begin and end are similar to the begin and end Pointers of a vector. You can use these Pointers to access an array sequentially"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"T&Back ()"})," : ParallelVector the last data"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"T \\*Data()"})," : represents the data in the array itself"]}),"\n",(0,i.jsx)(t.li,{children:"`void Destroy()' : empty the ParallelVector array and delete the array"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"size_t Size()"})," : indicates the number of data in ParallelVector"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void Resize(size_t size)"})," : Change ParallelVector to size, which must be greater than or equal to the size before the change"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void Clear()"})," : empty the data in ParallelVector"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void ReAlloc(size_t capacity)"})," : ParallelVector is allocated with new capacity. If data exists in the array, it is migrated to the new memory"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void Fill(T elem)"})," : Assign elem to all data on ParallelVector"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void Append(const T&elem, bool atomic = true)"})," : Add a piece of data at the end of ParallelVector"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void Swap(ParallelVector<t> &other)"})," : to exchange data with other parallelvectors"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ParallelVector<t> Copy()"})," : copies the current ParallelVector data into the Copy array"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"6customize-data-structures",children:"6.Customize data structures"}),"\n",(0,i.jsx)(t.h3,{id:"61basic-data-types",children:"6.1.Basic data types"}),"\n",(0,i.jsx)(t.p,{children:"We customize the data structure representation of points and edges to save memory space while covering all vertices:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"'Empty' : indicates a special data type with empty content."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"62combining-data-structures",children:"6.2.Combining data structures"}),"\n",(0,i.jsx)(t.p,{children:"In order to facilitate calculation, we define several data structures of point and edge data according to different calculation scenarios, which are as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"EdgeUnit<edgedata>"})," : represents an edge of weight type EdgeData, used to parse the input file, and contains three member variables:"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"size_t src"})," : the starting vertex of an edge"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"size_t dst"})," : the end of an edge"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"EdgeData edge_data"})," : edge weight"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"AdjUnit<edgedata>"})," : represents an edge of weight type EdgeData, used during batch computation, and contains two member variables:"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"size_t neighbour"})," : indicates the neighbor vertex of an edge"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"EdgeData edge_data"})," : edge weight"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"AdjList<edgedata>"})," : Adjacency list of vertices with weights of type EdgeData, often used to represent the set of incoming and outgoing edges of vertices and containing two member variables:"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"AdjUnit<t> \\* begin"})," : indicates the start pointer of the list"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"AdjUnit<t> \\* end"})," : The end pointer of the list. begin and end are similar to the begin and end Pointers of a vector. You can use these Pointers to loop through the adjacency list."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"7graph-class-olapbase",children:"7.Graph class OlapBase"}),"\n",(0,i.jsx)(t.p,{children:"Graph class OlapBase is the main class for TuGraph to load graphs and calculate graphs. OlapBase is commonly used to represent graphs with weights of type EdgeData. See olap_base.hpp under lgraph folder for the code. This chapter covers the types and API interfaces commonly used in Graph classes. The classes used by the Procedure, Embed, and Standalone functions described above are all subclasses of this class."}),"\n",(0,i.jsx)(t.h3,{id:"71basic-information",children:"7.1.Basic Information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"size_t NumVertices()"})," : obtains the number of vertices"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"size_t NumEdges()"})," : Gets the number of edges"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"size_t OutDegree(size_t vid)"})," : indicates the outdegree of the vid of the vertex"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"size_t InDegree(size_t vid)"})," : indicates the input degree of vertex vid"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"72node-sets-and-edge-sets-and-their-related-operations",children:"7.2.node sets and edge sets and their related operations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ParallelVector AllocVertexArray()"})," : Allocates an array of type VertexData with size as the number of vertices"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"void fill_vertex_array(V \\* array, V value)"})," : assigns values to all elements in the array"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ParallelBitset AllocVertexSubset()"})," : Assigns a subset of ParallelBitsets to denote whether the state of all vertices is activated"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"AdjList OutEdges(size_t vid)'"}),": gets the set of all outgoing edges of vertex v"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"AdjList InEdges(size_t vid)"})," : Obtains the set of all incoming edges of vertex v"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"void Transpose()"})," : transpose of a directed graph"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"LoadFromArray(char \\* edge_array, VertexId input_vertices, EdgeId input_edges, EdgeDirectionPolicy (edge_direction_policy) "}),": Loads the graph data from the array, contains four parameters, the meaning of which are respectively:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"edge_array"})," : reads the data from the array into the graph. Normally, the array contains multiple edges."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"input_vertices"}),": specifies the number of vertices read into the graph by the array."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"input_edges"})," : specifies the number of edges that the array reads into the image."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"edge_direction_policy"})," : indicates that the graph is directed or undirected. The graph can be divided into three modes: DUAL_DIRECTION, MAKE_SYMMETRIC, and INPUT_SYMMETRIC. For details, see 'enum EdgeDirectionPolicy' in the config.h file in the core folder."]}),"\n",(0,i.jsx)(t.h3,{id:"73locking-mechanism",children:"7.3.Locking mechanism"}),"\n",(0,i.jsx)(t.p,{children:"TuGraph implements a pair of locks to control the program's access to vertex data. Respectively is:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void AcquireVertexLock(size_t vid)"})," : locks a vertex vid and prohibits other threads from accessing the vertex data corresponding to this lock"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void ReleaseVertexLock(size_t vid)"})," : unlocks the vertex vid and all threads can access the vertex data corresponding to the lock"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"VertexLockGuard GuardVertexLock(size_t vid)"})," : When the vid operation is performed, the vertex vid is locked, and the lock is automatically released upon exiting the scope"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"74batch-processing-operations",children:"7.4.Batch Processing Operations"}),"\n",(0,i.jsx)(t.p,{children:"TuGraph provides two batch operations to do a point-centered batch process in parallel. Respectively is:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c++",children:'/*\n    Function Name:ReducedSum ProcessVertexInRange(std::function<ReducedSum(size_t)> work, size_t lower, size_t upper,\n                ReducedSum zero = 0,std::function<ReducedSum(ReducedSum, ReducedSum)> reduce =reduce_plus<ReducedSum>)\n\n    The work function executes the work function on nodes whose numbers are between lower and upper in the Graph. The fourth parameter indicates the accumulated base, which defaults to 0.The fifth parameter indicates that the iteration reduce function operation is performed on the return value of each node processed by work, and the default operation is the accumulation operation.\nFor details, please refer to include/lgraph/olap_base.h\n\n    Example: Count the number of vertices in the parent array that have outgoing edges\n*/\n\nauto vertex_num = graph.ProcessVertexInRange<size_t>(\n    [&](size_t i) {\n        if (graph.OutDegree(parent[i]) > 0) {\n            return 1;\n        }\n    },\n    0, parent.Size()\n);\nprintf("the number is %lu\\n",vertex_num);\n'})}),"\n",(0,i.jsx)(t.p,{children:"graph is the instantiated object of graph class OlapBase"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-C++",children:'/*\n    Function Name:ReducedSum ProcessVertexActive(std::function<ReducedSum(size_t)> work, ParallelBitset &active_vertices,\n                ReducedSum zero = 0,std::function<ReducedSum(ReducedSum, ReducedSum)> reduce =reduce_plus<ReducedSum>)\n\n    Function: Execute the work function for the node that corresponds to 1 in active_vertices. The third parameter represents the cumulative cardinality, which is 0 by default.\n\n    The fourth parameter indicates that the iteration reduce function operation is performed on the return value of each node processed by work, and the default operation is the accumulation operation.\n\n    For specific implementation, please refer to the specific code in /include/lgraph/olap_base\n\n\n\n    Example: Output all the out-degree neighbors of nodes 1, 2, and 3 in the Graph, and count the total out-degree of these three nodes\n*/\n\nauto active_in = graph.AllocVertexSubset();\nactive_in.Add(1);\nactive_in.Add(2);\nactive_in.Add(3);\nauto total_outdegree = graph.ProcessVertexActive<size_t>(\n    [&](size_t vi) {\n        size_t local_outdegree = 0;\n        for (auto & edge : graph.OutEdges(vi)) {\n            size_t dst = edge.neighbour;\n            printf("node %lu has neighbour %lu\\n",vi,dst);\n            local_outdegree += 1;\n        }\n        return local_outdegree;\n    },\n    active_in\n);\nprintf("total outdegree of node1,2,3 is %lu\\n",total_outdegree);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);