"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49677],{22269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=r(74848),a=r(28453);const n={},s="High Availability mode",o={id:"developer-manual/running/high-availability-mode",title:"High Availability mode",description:"This document describes the principles, preparations, and server operations of the high availability mode",source:"@site/versions/version-3.5.0/en-US/source/5.developer-manual/2.running/3.high-availability-mode.md",sourceDirName:"5.developer-manual/2.running",slug:"/developer-manual/running/high-availability-mode",permalink:"/tugraph-db/en/3.5.0/developer-manual/running/high-availability-mode",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tugraph Running",permalink:"/tugraph-db/en/3.5.0/developer-manual/running/tugraph-running"},next:{title:"Data Importing",permalink:"/tugraph-db/en/3.5.0/developer-manual/server-tools/data-import"}},h={},l=[{value:"1.Theory",id:"1theory",level:2},{value:"2.Preparation",id:"2preparation",level:2},{value:"3.Start the initial backup group",id:"3start-the-initial-backup-group",level:2},{value:"3.1.The initial data is consistent",id:"31the-initial-data-is-consistent",level:3},{value:"3.2.Inconsistent initial data",id:"32inconsistent-initial-data",level:3},{value:"4.Scale out other servers",id:"4scale-out-other-servers",level:2},{value:"5.Stopping the Server",id:"5stopping-the-server",level:2},{value:"6.Restarting the Server",id:"6restarting-the-server",level:2},{value:"7.Server Status",id:"7server-status",level:2},{value:"8.Data synchronization in high availability mode",id:"8data-synchronization-in-high-availability-mode",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"high-availability-mode",children:"High Availability mode"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This document describes the principles, preparations, and server operations of the high availability mode"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"1theory",children:"1.Theory"}),"\n",(0,i.jsx)(t.p,{children:"TuGraph provides high availability mode (HA mode) through multiple server hot backups. In high availability mode, writes are synchronized to all servers so that service availability is not affected even if some servers go down."}),"\n",(0,i.jsx)(t.p,{children:"In high availability mode, multiple TuGraph servers form a backup group. Each backup group consists of three or more TuGraph servers, one of which serves as the 'leader' and the other replication group servers serve as the 'follower'. Write requests are serviced by the 'leader' who replicates each request to the 'follower' and responds to the client only after the request has been synchronized to the server. This way, if any server fails, the other servers will still have all the data that has been written so far. If the 'leader' server fails, other servers will automatically select a new 'leader'."}),"\n",(0,i.jsx)(t.p,{children:"The high availability mode is only available in the enterprise edition. The open-source Community Edition does not include this feature."}),"\n",(0,i.jsx)(t.h2,{id:"2preparation",children:"2.Preparation"}),"\n",(0,i.jsx)(t.p,{children:"To enable high availability mode, users need to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Three or more instances of TuGraph servers."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"To obtain a license file with high availability, please contact our distributor for details."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"To enable high availability mode when starting lgraph_server, the 'enable_ha' option can be set to 'true' using a configuration file or the command line."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Set the correct rpc_port through the configuration file or command line"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"3start-the-initial-backup-group",children:"3.Start the initial backup group"}),"\n",(0,i.jsx)(t.h3,{id:"31the-initial-data-is-consistent",children:"3.1.The initial data is consistent"}),"\n",(0,i.jsxs)(t.p,{children:["When the data in all servers is the same or there is no data at startup, the user can\nspecify ",(0,i.jsx)(t.code,{children:"--conf host1:port1,host2:port2"})," to start the server.\nIn this way, all prepared TuGraph instances can be added to the initial backup group at one time,\nAll servers in the backup group elect ",(0,i.jsx)(t.code,{children:"leader"})," according to the RAFT protocol, and other\nservers join the backup group with the role of ",(0,i.jsx)(t.code,{children:"follower"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"An example command to start an initial backup group is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ ./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090,172.22.224.16:9090,172.22.224.17:9090\n"})}),"\n",(0,i.jsx)(t.p,{children:"After the first server is started, it will elect itself as the 'leader' and organize a backup group with only itself."}),"\n",(0,i.jsx)(t.p,{children:"The first server is started with the '--master \"\" or' --master BOOTSTRAP 'options, depending on whether the first server already has data."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"'--master \"\":' If there is no data in the first server, the user can start the server directly with the '--master \"\"' option."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"'--master BOOTSTRAP:' if the data already exists in the first server (imported using lgraph_import or transferred from a server not in high availability mode) and has not been used in high availability mode before, Then the user should use the 'BOOTSTRAP' option to start the server in boot mode. In boot mode, the server copies its data to the new server before adding the new server to the backup group, so that the data in each server is consistent."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following is an example of the command line for starting the first server that already has data:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ ./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --master BOOTSTRAP\n"})}),"\n",(0,i.jsx)(t.h3,{id:"32inconsistent-initial-data",children:"3.2.Inconsistent initial data"}),"\n",(0,i.jsxs)(t.p,{children:["If there is already data in the first server (imported by the ",(0,i.jsx)(t.code,{children:"lgraph_import"})," tool or transferred from a server in non-high availability mode),\nAnd it has not been used in high availability mode before, the user should use the ",(0,i.jsx)(t.code,{children:"enable_bootstrap"})," parameter\nStart the server in boot mode. In bootstrap mode, the server will add its own\nThe data is copied to the new server so that the data in each server is consistent."]}),"\n",(0,i.jsx)(t.p,{children:"An example command to start a data server is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ ./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090 --enable_bootstrap true\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Other servers without data do not need to specify the ",(0,i.jsx)(t.code,{children:"enable_bootstrap"})," parameter, just specify the ",(0,i.jsx)(t.code,{children:"leader"})," through the ",(0,i.jsx)(t.code,{children:"conf"})," parameter, the command example is as follows"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ ./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090\n"})}),"\n",(0,i.jsx)(t.h2,{id:"4scale-out-other-servers",children:"4.Scale out other servers"}),"\n",(0,i.jsxs)(t.p,{children:["After starting the initial backup group, if you want to scale out the backup group, add new servers to the backup group,\nThe ",(0,i.jsx)(t.code,{children:"--conf HOST:PORT"})," option should be used, where ",(0,i.jsx)(t.code,{children:"HOST"})," can be the IP address of any server already in this backup group,\nAnd ",(0,i.jsx)(t.code,{children:"PORT"})," is its RPC port. E.g:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This command will start a TuGraph server in high availability mode and try to add it to the backup group containing the server ",(0,i.jsx)(t.code,{children:"172.22.224.15:9090"}),".\nNote that joining a backup group requires a server to synchronize its data with the backup group's ",(0,i.jsx)(t.code,{children:"leader"})," server, and this process may take a considerable amount of time, depending on the size of the data."]}),"\n",(0,i.jsx)(t.h2,{id:"5stopping-the-server",children:"5.Stopping the Server"}),"\n",(0,i.jsx)(t.p,{children:"When a server goes offline via 'CTRL-C', it will notify the current 'leader' server to remove the server from the backup group. If the leader server goes offline, it will pass the leader identity permission to another server before going offline."}),"\n",(0,i.jsx)(t.p,{children:"If a server is terminated or disconnected from other servers in the backup group, the server is considered a failed node and the leader server will remove it from the backup group after a specified time limit."}),"\n",(0,i.jsx)(t.p,{children:"If any server leaves the backup group and wishes to rejoin, it must start with the '--master {HOST: PORT}' option, where 'HOST' is the IP address of a server in the current backup group."}),"\n",(0,i.jsx)(t.h2,{id:"6restarting-the-server",children:"6.Restarting the Server"}),"\n",(0,i.jsx)(t.p,{children:"Restarting the entire backup group is not recommended because it can interrupt service. You can shut down all servers if you need to. However, on a restart, the last server that went down must be started first."}),"\n",(0,i.jsx)(t.h2,{id:"7server-status",children:"7.Server Status"}),"\n",(0,i.jsx)(t.p,{children:"The current status of the backup group can be obtained from the TuGraph visualization tool, REST API, and Cypher query."}),"\n",(0,i.jsx)(t.p,{children:"In the TuGraph visualization tool, you can find the list of servers and their roles in the backup group in the DBInfo section."}),"\n",(0,i.jsxs)(t.p,{children:["With the REST API, you can use ",(0,i.jsx)(t.code,{children:"GET /info/peers"})," to request information."]}),"\n",(0,i.jsxs)(t.p,{children:["In Cypher, the ",(0,i.jsx)(t.code,{children:"CALL dbms.listServers()"})," statement is used to query the status information of the current backup group."]}),"\n",(0,i.jsx)(t.h2,{id:"8data-synchronization-in-high-availability-mode",children:"8.Data synchronization in high availability mode"}),"\n",(0,i.jsx)(t.p,{children:"In high availability mode, different servers in the same backup group may not always be in the same state. For performance reasons, if a request has been synchronized to more than half of the servers, the leader server will consider the request to be in the committed state. Although the rest of the servers will eventually receive the new request, the inconsistent state of the servers will persist for some time. A client may also send a request to a server that has just restarted, thus having an older state and waiting to join a backup group."}),"\n",(0,i.jsx)(t.p,{children:"To ensure that the client sees consistently continuous data, and in particular to get rid of the 'reverse time travel' problem, where the client reads a state older than it has seen before, each TuGraph server keeps a monotonically increasing data version number. The mapping of the data version number to the database state in the backup group is globally consistent, meaning that if two servers have the same data version number, they must have the same data. When responding to a request, the server includes its data version number in the response. Thus, the client can tell which version it has seen. The client can choose to send this data version number along with the request. Upon receiving a request with a data version number, the server compares the data version number to its current version and rejects the request if its own version is lower than the requested version. This mechanism ensures that the client never reads a state that is older than before."})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var i=r(96540);const a={},n=i.createContext(a);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);