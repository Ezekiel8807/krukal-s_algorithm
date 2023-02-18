                                            # Kruskal's Algorithm 
## Outlines
- Introduction
- Algorithmic Steps
- Example of Kruskal's Algorithm in action
- Pseudo-code of Kruskal's Algorithm
- How does Kruskal's Algorithm work?
- Applications of Kruskal's Algorithm
- Kruskal's Algorithm Vs. Other Graph Algorithms
- Implementing Kruskal's Algorithm using HTML, CSS and JAVASCRIPT.
- Conclusion

## INTRODUCTION
Kruskal's algorithm is a greedy algorithm for finding the minimum spanning tree of a connected, undirected graph. It was first proposed by Joseph Kruskal in 1956 and is widely used in computer science and engineering for solving problems that involve finding the shortest path between nodes in a graph. The MST is a subset of edges that connect all vertices of the graph with the minimum possible total edge weight. The algorithm is widely used in computer science, particularly in network design, image segmentation, and clustering. Kruskal's Algorithm is a method used to find the MST of a graph. The algorithm builds the MST by adding the edges of the graph with the smallest weight until all vertices are connected. 

### Algorithmic Steps
The algorithmic steps of Kruskal's Algorithm are as follows:
Sort all the edges in non-decreasing order of their weight.
Pick the smallest edge. If adding the edge doesn't form a cycle, add it to the MST.
Repeat step 2 until all vertices are connected.

### Example of Kruskal's Algorithm in action
For example, suppose we have the following graph:

Kruskal's Algorithm Graph

Using Kruskal's Algorithm, we sort the edges by their weight:

(A,B) - 2, (A,D) - 5, (B,D) - 6, (B,C) - 7, (C,D) - 8, (C,E) - 9, (D,E) - 15.

The algorithm then picks the smallest edge, which is (A,B) with a weight of 2. The edge is added to the MST. The next smallest edge is (A,D) with a weight of 5. The edge is added to the MST because it doesn't form a cycle. The algorithm continues adding edges until all vertices are connected.

```
The Pseudo-code of Kruskal's Algorithm is as follows:
Initialize a forest F with all vertices in the graph
Sort the edges of the graph in non-decreasing order of weight
for each edge e in sorted_edges:
       if the vertices of e are in different trees:
           add e to F
           union the trees of the vertices of e
return F
```

## How does Kruskal's Algorithm work?
Kruskal's algorithm works by adding the edges of the graph with the smallest weight until all vertices are connected. The algorithm starts with a forest of trees, where each tree contains a single vertex of the graph. The algorithm then sorts the edges by their weight and adds the smallest edge to the MST if it doesn't form a cycle. The algorithm continues adding edges until all vertices are connected.

The correctness of Kruskal's Algorithm can be proven by the Cut Property. The Cut Property states that if an edge is the minimum weight edge in a cut, then it is in the MST. A cut is a partition of the graph into two sets of vertices. The minimum weight edge that connects the two sets is in the MST. Kruskal's algorithm builds the MST by adding the edges that are the minimum weight in a cut until all vertices are connected.

The time complexity of Kruskal's algorithm is O(E log E), where E is the number of edges in the graph. The time complexity is due to the sorting of the edges, which takes O(E log E) time. The space complexity of Kruskal's Algorithm is O(V), where V is the number of vertices in the graph.

## Applications of Kruskal's Algorithm
Kruskal's Algorithm has many applications, including:

**Minimum Spanning Tree**: Kruskal's Algorithm is used to find the MST of a graph, which is useful in many applications such as network design, transportation planning, and clustering.

**Network Design**: Kruskal's Algorithm is used to design communication networks, including the Internet and wireless networks. The algorithm helps in selecting the minimum cost of connecting all nodes in the network.

**Image Segmentation**: Kruskal's Algorithm is used to segment images into regions based on the similarity of pixels. The algorithm helps in finding the regions with similar properties.

**Clustering**: Kruskal's Algorithm is used to cluster data into groups with similar properties. The algorithm helps in finding the groups with minimum intra-cluster distance.


## Implementing Kruskal's Algorithm using html, css and javaScript
The implementation of kruskal's algorithm was done using html, css and javaScript which the code block is shown below;

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Kruskal's Algorithm Input</title>
   
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
      <h2>Enter Graph Inputs for Kruskal's Algorithm</h2>
      <form>
        <label for="vertices">Enter nodes with space seperator:</label>
        <input type="text" id="nodes" name="nodes" oninput="this.value = this.value.toUpperCase()" required />
        <div id="edges"></div>
        <button type="button" onclick="addEdge()">Add Edge</button>
        <button type="button" onclick="runKruskal()">Run Kruskal's Algorithm</button>
      </form>
    </div>


    <script type="text/javascript" src="kruskals.js"></script>
  </body>
</html>
```


Css Styling:

```
* {
box-sizing: border-box;
}


body {
font-family: Arial, Helvetica, sans-serif;
background-color: #f2f2f2;
}


.container {
margin: 0 auto;
max-width: 800px;
padding: 20px;
background-color: #fff;
}


h2 {
text-align: center;
}


form {
display: flex;
flex-direction: column;
align-items: center;
}


label {
margin-top: 10px;
margin-bottom: 5px;
}


input[type="number"] {
padding: 10px;
border: none;
border-radius: 5px;
background-color: #f2f2f2;
margin-bottom: 10px;
}


input[type="text"] {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #f2f2f2;
    margin-bottom: 10px;
}


button {
background-color: #4caf50;
color: white;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;
transition: background-color 0.3s ease;
}


button:hover {
background-color: #3e8e41;
}


#edges {
    width: 100%;
    padding: 5px;
}
   
.edge-input {
    width: 100%;
    display: block;
    margin-top: 10px;
}
   
.edge-input input {
    display: inline-block;
    margin-right: 10px;
}


#edges input{
    width: 100%;
    display: block;
}
```


Lastly the javaScript code block for performing kruskal's algorithm

```
let numEdges = 0;


function addEdge() {
   numEdges++


   let edgeDiv = document.createElement("div");
   edgeDiv.classList.add("edge-input");


   edgeDiv.innerHTML =
   '<label  for="source-' + numEdges + '">Enter the source node of edge ' + numEdges +':</label>' +
   '<input class="source-" type="text" id="source-' + numEdges + '" name="source-' + numEdges + '" oninput="this.value = this.value.toUpperCase()" required />' +


   '<label class="target-" for="target-' + numEdges + '">Enter the target node of edge ' + numEdges + ':</label>' +
   '<input type="text" id="target-' + numEdges + '" name="target-' + numEdges +'" oninput="this.value = this.value.toUpperCase()" required />' +


   '<label class="weight-" for="weight-' + numEdges + '">Enter the weight of edge ' + numEdges + ':</label>' +
   '<input type="number" id="weight-' + numEdges + '" name="weight-' + numEdges + '" oninput="this.value = this.value.toUpperCase()" required />' + '<br />';
   document.getElementById("edges").appendChild(edgeDiv);
}






//sorting edges in ascending order
function sortEdges(edges) {
   return edges.sort((a, b) => a.weight - b.weight);
}




function findParent(parents, nodes) {
  while (parents[nodes] !== nodes) {
    nodes = parents[nodes];
  }
  return nodes;
}


 
// Kruskal's algorithm function
function kruskal(edges, nodes) {


  let sortedEdges = sortEdges(edges);
  let parents = {};
  let minimumSpanningTree = [];
 
  for (let i = 0; i < nodes.length; i++) {
    parents[nodes[i]] = nodes[i];
  }


  for (let i = 0; i < sortedEdges.length; i++) {
    let edge = sortedEdges[i];


    let startParent = findParent(parents, edge.source);
    let endParent = findParent(parents, edge.target);


    if (startParent !== endParent) {
      minimumSpanningTree.push(edge);
      parents[endParent] = startParent;
    }
  }


  console.log(minimumSpanningTree);
}




function runKruskal() {


  // getting nodes
  let numNodes = document.getElementById("nodes").value;


  //converting inputs to array
  let nodes = numNodes.split(" ");


  //declaring an empty array for edges as the starting point
  let edges = [];


  for (let i = 1; i <= numEdges; i++) {
    let source = document.getElementById("source-" + i).value;
    let target = document.getElementById("target-" + i).value;
    let weight = document.getElementById("weight-" + i).value;
    edges.push({ source: source, target: target, weight: weight });
  }


  //calling kruskal's Algorithm function
  kruskal(edges, nodes);
   
}
```


## Conclusion
Kruskal's Algorithm is a widely used algorithm in computer science, particularly in finding the MST of a graph. The algorithm builds the MST by adding the edges of the graph with the smallest weight until all vertices are connected. The algorithm has many applications, including network design, image segmentation, and clustering. Kruskal's Algorithm compares favorably to other graph algorithms such as Prim's Algorithm and Dijkstra's Algorithm. Implementing Kruskal's Algorithm requires using data structures such as disjoint sets and heaps, and optimizing the code to reduce the time and space complexity.
