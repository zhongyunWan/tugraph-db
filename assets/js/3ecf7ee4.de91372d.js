"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28759],{3559:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=i(74848),r=i(28453);const o={},a="Data Importing",s={id:"developer-manual/server-tools/data-import",title:"Data Importing",description:"This document describes the data import function of TuGraph. These include delimiters in CSV format, sample formats for jsonline, and two modes for importing online and offline.",source:"@site/versions/version-4.0.0/en-US/source/5.developer-manual/3.server-tools/1.data-import.md",sourceDirName:"5.developer-manual/3.server-tools",slug:"/developer-manual/server-tools/data-import",permalink:"/tugraph-db/en/4.0.0/developer-manual/server-tools/data-import",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"High Availability mode",permalink:"/tugraph-db/en/4.0.0/developer-manual/running/high-availability-mode"},next:{title:"Data Export",permalink:"/tugraph-db/en/4.0.0/developer-manual/server-tools/data-export"}},l={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2.CSV file format delimiter",id:"2csv-file-format-delimiter",level:2},{value:"3.The configuration file",id:"3the-configuration-file",level:2},{value:"3.1.Configuration File Format",id:"31configuration-file-format",level:3},{value:"3.1.1.The keyword",id:"311the-keyword",level:4},{value:"3.1.2.Example Configuration File",id:"312example-configuration-file",level:3},{value:"4.Offline full import",id:"4offline-full-import",level:2},{value:"4.1.Offline Import Example",id:"41offline-import-example",level:3},{value:"5.Online incremental Import",id:"5online-incremental-import",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"data-importing",children:"Data Importing"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This document describes the data import function of TuGraph. These include delimiters in CSV format, sample formats for jsonline, and two modes for importing online and offline."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["After the installation is successful, you can use the ",(0,t.jsx)(n.code,{children:"lgraph_import"})," batch import tool to import existing data into TuGraph. ",(0,t.jsx)(n.code,{children:"lgraph_import"})," supports importing data from CSV files and JSON data sources."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"sonline format, a row of a json array string"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"CSV format"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[movies.csv]\nid, name, year, rating\ntt0188766,King of Comedy,1999,7.3\ntt0286112,Shaolin Soccer,2001,7.3\ntt4701660,The Mermaid,2016,6.3\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"jsonline format"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'["tt0188766","King of Comedy",1999,7.3]\n["tt0286112","Shaolin Soccer",2001,7.3]\n["tt4701660","The Mermaid",2016,6.3]\n'})}),"\n",(0,t.jsx)(n.p,{children:"TuGraph supports two data importing modes\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"offline"}),"\uff1aRead the data and import it into a data file for the specified server, it should only be done when the server is offline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"online"}),"\uff1aRead the data and send it to the running server, which then imports the data into its database."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2csv-file-format-delimiter",children:"2.CSV file format delimiter"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CSV delimiters can be single-character or multi-character strings, which cannot contain 'r' or 'n'. Note that different shells handle input strings differently, so different escape handling may be required for different shell input parameters.\n"})}),"\n",(0,t.jsx)(n.p,{children:"In addition, 'lgraph_import' also supports the following escape characters for entering special symbols:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Escape character"}),(0,t.jsx)(n.th,{children:"Instructions"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\\"}),(0,t.jsxs)(n.td,{children:["The backslash",(0,t.jsx)(n.code,{children:"\\\\"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\\a"}),(0,t.jsx)(n.td,{children:"ASCII code 0x07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\\f"}),(0,t.jsx)(n.td,{children:"form-feed\uff0cASCII code 0x0c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\\t"}),(0,t.jsx)(n.td,{children:"Horizontal tab characters\uff0c ASCII code 0x09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\\v"}),(0,t.jsx)(n.td,{children:"Vertical tab characters\uff0c ASCII code 0x0b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\\xnn"}),(0,t.jsx)(n.td,{children:"Two hexadecimal digits representing one byte\uff0cexample \\x9A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\\nnn"}),(0,t.jsx)(n.td,{children:"A three-digit octal number representing a single byte\uff0cexample \\001, \\443\uff0cdata range cannot exceed 255"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Demo\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ ./lgraph_import -c ./import.config --delimiter "\\001\\002"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"3the-configuration-file",children:"3.The configuration file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"`lgraph_import`tool configures the environment using the specified configuration file. The configuration file describes the paths to the input files, the vertices/edges they represent, and the vertex/edge format.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"31configuration-file-format",children:"3.1.Configuration File Format"}),"\n",(0,t.jsx)(n.p,{children:"The configuration file consists of two parts: schema and files. The 'schema' part defines label, and the 'files' part describes the data files to be imported."}),"\n",(0,t.jsx)(n.h4,{id:"311the-keyword",children:"3.1.1.The keyword"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["schema (Array\uff09\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"label\uff08required\uff0cstring\uff09"}),"\n",(0,t.jsx)(n.li,{children:"type\uff08required\uff0c VERTEX or EDGE\uff09"}),"\n",(0,t.jsxs)(n.li,{children:["properties\uff08Array\uff0crequired for vertex\uff0cIf there is no property for the edge, you can leave it unconfigured\uff09\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"name\uff08required, string\uff09"}),"\n",(0,t.jsx)(n.li,{children:"type \uff08required,\uff0cBOOL\uff0cINT8\uff0cINT16\uff0cINT32\uff0cINT64\uff0cDATE\uff0cDATETIME\uff0cFLOAT\uff0cDOUBLE\uff0cSTRING\uff0cBLOB\uff09"}),"\n",(0,t.jsx)(n.li,{children:"optional\uff08optional\uff0cIndicates that the field can be configured or not configured\uff09"}),"\n",(0,t.jsx)(n.li,{children:"index\uff08optional\uff0cWhether the field needs to be indexed\uff09"}),"\n",(0,t.jsx)(n.li,{children:"unique\uff08Optional, whether the field indexed and is of type unique\uff09"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"primary (Specify a property that uniquely identifies a point in the primary key field)"}),"\n",(0,t.jsx)(n.li,{children:"constraints (Edge-only configuration, optional, array form, start and end labels, unconfigured or empty means unrestricted)"}),"\n",(0,t.jsxs)(n.li,{children:["detach_property (optional, both Edge and Vertex can config\uff0cdefault is ",(0,t.jsx)(n.code,{children:"false"}),". ",(0,t.jsx)(n.code,{children:"true"})," means the property data is stored in detached model, which can reduce io read amplification in cases with less memory and much property data.)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["files \uff08Array\uff09\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"path\uff08required\uff0cstring\uff0cThe value can be a file path or a directory path. If it is a directory, all files in the directory will be imported. Ensure that they have the same schema\uff09"}),"\n",(0,t.jsx)(n.li,{children:"header\uff08Optional, numeric, header in the first few lines of the file, or 0\uff09"}),"\n",(0,t.jsx)(n.li,{children:"format\uff08required\uff0cJSON or CSV\uff09"}),"\n",(0,t.jsx)(n.li,{children:"label\uff08required\uff0cstring\uff09"}),"\n",(0,t.jsxs)(n.li,{children:["columns\uff08Array\uff09\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SRC_ID (Special string\uff0conly on the edges,That means this column is the source data)"}),"\n",(0,t.jsx)(n.li,{children:"DST_ID (A special string, only on the edges, indicates that this column is the destination data)"}),"\n",(0,t.jsx)(n.li,{children:"SKIP \xa0 (A special string to skip this column of data)"}),"\n",(0,t.jsx)(n.li,{children:"[property]"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"SRC_ID (Edge-only configuration. The value is the start label)"}),"\n",(0,t.jsx)(n.li,{children:"DST_ID (Edge-only configuration. The value is the destination point label)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"312example-configuration-file",children:"3.1.2.Example Configuration File"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "schema": [\n    {\n      "label": "actor",\n      "type": "VERTEX",\n      "properties": [\n        { "name": "aid", "type": "STRING" },\n        { "name": "name", "type": "STRING" }\n      ],\n      "primary": "aid"\n    },\n    {\n      "label": "movie",\n      "type": "VERTEX",\n      "properties": [\n        { "name": "mid", "type": "STRING" },\n        { "name": "name", "type": "STRING" },\n        { "name": "year", "type": "INT16" },\n        { "name": "rate", "type": "FLOAT", "optional": true }\n      ],\n      "primary": "mid",\n      "detach_property": false\n    },\n    {\n      "label": "play_in",\n      "type": "EDGE",\n      "properties": [{ "name": "role", "type": "STRING", "optional": true }],\n      "constraints": [["actor", "movie"]]\n    }\n  ],\n  "files": [\n    {\n      "path": "actors.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "actor",\n      "columns": ["aid", "name"]\n    },\n    {\n      "path": "movies.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "movie",\n      "columns": ["mid", "name", "year", "rate"]\n    },\n    {\n      "path": "roles.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "play_in",\n      "SRC_ID": "actor",\n      "DST_ID": "movie",\n      "columns": ["SRC_ID", "role", "DST_ID"]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"For the above Example Configuration File, three labels defined: two point types' actor 'and' movie ', and one edge type 'role'. Each label describes: the name of the label, the type (dot or edge), which attribute fields are available, and the type of each field. For points, the primary field also defined; For edges, the constraints field also defined, which limits the starting and ending points of the edges."}),"\n",(0,t.jsx)(n.p,{children:"It also describes three data files, two dot data files' actors.csv 'and' movies.csv ', and one edge data file 'roles.csv'. Each section describes the path of the file, the format of the data, the first few lines of the header, the label of the data, and the corresponding field of each column in each row of data in the file."}),"\n",(0,t.jsx)(n.p,{children:"For the above configuration files, the import tool will first create labels' actor ', 'movie', and 'role' in TuGraph, and then perform data import of the three files."}),"\n",(0,t.jsx)(n.h2,{id:"4offline-full-import",children:"4.Offline full import"}),"\n",(0,t.jsx)(n.p,{children:"The offline mode can be used only on offline servers. An offline import creates a new graph, so it's more suitable for your first data import on a newly installed TuGraph server."}),"\n",(0,t.jsx)(n.p,{children:"To use the 'lgraph_import' tool in offline mode, you can specify the 'lgraph_import --online false' option. To see the command-line options available, use 'lgraph_import --online false --help' :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ ./lgraph_import --online false -help\nAvailable command line options:\n    --log               Log file to use, empty means stderr. Default="".\n    -v, --verbose       Verbose level to use, higher means more verbose.\n                        Default=1.\n    ...\n    -h, --help          Print this help message. Default=0.\n'})}),"\n",(0,t.jsx)(n.p,{children:"Command line arguments:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-c, --config_file"})," ",(0,t.jsx)(n.code,{children:"config_file"}),": Import the configuration file name in the following format:"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"--log"})," ",(0,t.jsx)(n.code,{children:"log_dir"}),": Log directory. The default is an empty string, in which case the log information output to the console."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"--verbose"})," ",(0,t.jsx)(n.code,{children:"0/1/2"}),": Log level. The higher the log level, the more detailed the output information is. The default value is 1."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-i, --continue_on_error"})," ",(0,t.jsx)(n.code,{children:"true/false"}),": If an error occurs, skip the error and continue. The default is false. If an error occurs, exit."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-d, --dir"})," ",(0,t.jsx)(n.code,{children:"{diretory}"}),":The database directory to which the import tool will write data. Default is'./db '."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"--delimiter"})," ",(0,t.jsx)(n.code,{children:"{delimiter}"}),": Data file separator. This is used only when the data source is in CSV format. The default is', '\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-u, --username"})," ",(0,t.jsx)(n.code,{children:"{user}"}),": Username of the database. You need to be an administrator to perform offline import."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-p, --password"})," ",(0,t.jsx)(n.code,{children:"{password}"}),": Specifies the password of the database user"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"--overwrite"})," ",(0,t.jsx)(n.code,{children:"true/false"}),": Whether to overwrite data. When set to true, the data directory overwritten if it already exists. Default to 'false'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-g, --graph"})," ",(0,t.jsx)(n.code,{children:"{graph_name}"}),": Specify the kind of graph to import."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-h, --help"}),": The help information displayed."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"41offline-import-example",children:"4.1.Offline Import Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"In this example, we use the movie-actor data described above to demonstrate the use of the import tool. The data to be imported is divided into three files: 'movies.csv', 'actors.csv', and 'roles.csv'.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["'movies.csv' contains information about movies, where each movie has an id (as a primary key for retrieval), and each movie also has attributes such as title, year, and rating. (Data from ",(0,t.jsx)(n.a,{href:"http://www.imdb.com",children:"IMDb"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  [movies.csv]\n  id, name, year, rating\n  tt0188766,King of Comedy,1999,7.3\n  tt0286112,Shaolin Soccer,2001,7.3\n  tt4701660,The Mermaid,2016,6.3\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The jsonline format is as follows:\nAll fields can be strings, which will be converted to the corresponding type when imported"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'["tt0188766","King of Comedy",1999,7.3]\n["tt0286112","Shaolin Soccer",2001,7.3]\n["tt4701660","The Mermaid",2016,6.3]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'["tt0188766","King of Comedy","1999","7.3"]\n["tt0286112","Shaolin Soccer","2001","7.3"]\n["tt4701660","The Mermaid","2016","6.3"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"actors.csv"}),"It contains information about the actors. Each actor also has an id, as well as properties such as name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  [actors.csv]\n  id, name\n  nm015950,Stephen Chow\n  nm0628806,Man-Tat Ng\n  nm0156444,Cecilia Cheung\n  nm2514879,Yuqi Zhang\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The corresponding jsonline format is as follows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'["nm015950","Stephen Chow"]\n["nm0628806","Man-Tat Ng"]\n["nm0156444","Cecilia Cheung"]\n["nm2514879","Yuqi Zhang"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"roles.csv"}),"It contains information about which role an actor played in which movie. Each row records a character played by a given actor in a given movie, corresponding to an edge in the database.",(0,t.jsx)(n.code,{children:"SRC_ID"})," and ",(0,t.jsx)(n.code,{children:"DST_ID"})," are the source and target vertices of the edge, which are the 'primary' properties defined in 'actors.csv' and 'movies.csv', respectively."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  [roles.csv]\n  actor, role, movie\n  nm015950,Tianchou Yin,tt0188766\n  nm015950,Steel Leg,tt0286112\n  nm0628806,,tt0188766\n  nm0628806,coach,tt0286112\n  nm0156444,PiaoPiao Liu,tt0188766\n  nm2514879,Ruolan Li,tt4701660\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The corresponding jsonline format is as follows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'["nm015950","Tianchou Yin","tt0188766"]\n["nm015950","Steel Leg","tt0286112"]\n["nm0628806",null,"tt0188766"]\n["nm0628806","coach","tt0286112"]\n["nm0156444","PiaoPiao Liu","tt0188766"]\n["nm2514879","Ruolan Li","tt4701660"]\n'})}),"\n",(0,t.jsx)(n.p,{children:"'configuration file import.conf', notice that there are two HEADER lines in each file, so we need to specify the 'HEADER=2' option."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "schema": [\n    {\n      "label": "actor",\n      "type": "VERTEX",\n      "properties": [\n        { "name": "aid", "type": "STRING" },\n        { "name": "name", "type": "STRING" }\n      ],\n      "primary": "aid"\n    },\n    {\n      "label": "movie",\n      "type": "VERTEX",\n      "properties": [\n        { "name": "mid", "type": "STRING" },\n        { "name": "name", "type": "STRING" },\n        { "name": "year", "type": "INT16" },\n        { "name": "rate", "type": "FLOAT", "optional": true }\n      ],\n      "primary": "mid"\n    },\n    {\n      "label": "play_in",\n      "type": "EDGE",\n      "properties": [{ "name": "role", "type": "STRING", "optional": true }],\n      "constraints": [["actor", "movie"]]\n    }\n  ],\n  "files": [\n    {\n      "path": "actors.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "actor",\n      "columns": ["aid", "name"]\n    },\n    {\n      "path": "movies.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "movie",\n      "columns": ["mid", "name", "year", "rate"]\n    },\n    {\n      "path": "roles.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "play_in",\n      "SRC_ID": "actor",\n      "DST_ID": "movie",\n      "columns": ["SRC_ID", "role", "DST_ID"]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Using the import configuration file, we can now import data using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ ./lgraph_import\n        -c import.conf             # Read configuration information from import.conf\n        --dir /data/lgraph_db      # Store the data in /data/lgraph_db\n        --graph mygraph            # Import the graph named mygraph\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notice"}),"\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If a graph named 'mygraph' already exists, the import tool will print an error message and exit. To force a graph to be overwritten, use the '--overwrite true' option."}),"\n",(0,t.jsx)(n.li,{children:"Configuration and data files must be stored in UTF-8 encoding (or normal ASCII encoding, which is a subset of UTF-8). If any file uses an encoding other than UTF-8 (for example, UTF-8 with BOM or GBK), the import will fail and output a profiler error."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"5online-incremental-import",children:"5.Online incremental Import"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"The online import mode can be used to import a batch of files into an already running instance of TuGraph. This is handy for processing incremental batch updates that typically occur at fixed intervals. The 'lgraph_import --online true' option enables the import tool to work in online mode. Like offline mode, online mode has its own set of command-line options, which can be printed using the '-h, --help' options:\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ lgraph_import --online true -h\nAvailable command line options:\n    --online            Whether to import online.\n    -h, --help          Print this help message. Default=0.\n\nAvailable command line options:\n    --log               Log file to use, empty means stderr. Default="".\n    -v, --verbose       Verbose level to use, higher means more verbose.\n                        Default=1.\n    -c, --config_file   Config file path.\n    -r, --url           DB REST API address.\n    -u, --username      DB username.\n    -p, --password      DB password.\n    -i, --continue_on_error\n                        When we hit a duplicate uid or missing uid, should we\n                        continue or abort. Default=0.\n    -g, --graph         The name of the graph to import into. Default=default.\n    --skip_packages     How many packages should we skip. Default=0.\n    --delimiter         Delimiter used in the CSV files\n    --breakpoint_continue\n                        When the transmission process is interrupted,whether\n                        to re-transmit from zero package next time. Default=false\n    -h, --help          Print this help message. Default=0.\n'})}),"\n",(0,t.jsx)(n.p,{children:"The configuration related to the file specified in the configuration file, and its format is exactly the same as' offline mode '. However, instead of importing the data into a local database, we are now sending the data to a running TuGraph instance, which is typically running on a different computer than the client machine on which the import tool is running. Therefore, we need to specify the URL, DB user, and password for the HTTP address of the remote machine."}),"\n",(0,t.jsx)(n.p,{children:"If the user and password are valid, and the specified graph exists, the import tool sends the data to the server, which then parses the data and writes it to the specified graph. The data will be sent in a packet of about 16 MB, interrupted at the nearest newline. Each package imported atomically, which means that if the package is successfully imported, all data is successfully imported; otherwise, none of the data enters the database. If '--continue_on_error true' is specified, data integrity errors are ignored and offending lines are ignored. Otherwise, the import stops at the first error package and prints out the number of packages that have been imported. In this case, the user can modify the data to eliminate errors, and then use '--skip_packages N' to redo the import to skip the imported packages."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);