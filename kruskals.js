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



//sorting edges in assending order
function sortEdges(edges) {
   return edges.sort((a, b) => a.weight - b.weight);
}


function findParent(parents, nodes) {
  while (parents[nodes] !== nodes) {
    nodes = parents[nodes];
  }
  return nodes;
}

 
// Krukals algorithm function
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

  //declearing an empty arrey for edges as the stating point
  let edges = [];

  for (let i = 1; i <= numEdges; i++) {
    let source = document.getElementById("source-" + i).value;
    let target = document.getElementById("target-" + i).value;
    let weight = document.getElementById("weight-" + i).value;
    edges.push({ source: source, target: target, weight: weight });
  }

  //calling krukals Algorithm fouction
  kruskal(edges, nodes);
    
}