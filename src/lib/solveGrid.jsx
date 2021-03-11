import dictImport from '/solvegrid.js'

var Node = function(value, row, col) {
    this.value = value
    this.row = row
    this.col = col
}

var Path = function() {
    this.nodes = []
}

Path.prototype.push = function(node) {
    this.nodes.push(node)
    return this
}

Path.prototype.contains = function(node) {
    for (var i = 0, ii = this.nodes.length; i < ii; i++) {
        if (this.nodes[i] === node) {
            return true
        }
    }

    return false
}

Path.prototype.clone = function() {
    var path = new Path()
    path.nodes = this.nodes.slice(0)
    return path
}

Path.prototype.to_word = function() {
    var word = ''

    for (var i = 0, ii = this.nodes.length; i < ii; ++i) {
        word += this.nodes[i].value
    }

    return word
}

var Board = function(nodes, dict) {
    // Expects n x m array.
    this.nodes = nodes
    this.words = []
    this.row_count = nodes.length
    this.col_count = nodes[0].length
    this.dict = dict
}

Board.from_raw = function(board, dict) {
    var ROW_COUNT = board.length
      , COL_COUNT = board[0].length

    var nodes = []

    // Replace board with Nodes
    for (var i = 0, ii = ROW_COUNT; i < ii; ++i) {
        nodes.push([])
        for (var j = 0, jj = COL_COUNT; j < jj; ++j) {
            nodes[i].push(new Node(board[i][j], i, j))
        }
    }

    return new Board(nodes, dict)
}

Board.prototype.toString = function() {
    return JSON.stringify(this.nodes)
}

Board.prototype.update_potential_words = function(dict) {
    for (var i = 0, ii = this.row_count; i < ii; ++i) {
        for (var j = 0, jj = this.col_count; j < jj; ++j) {
            var node = this.nodes[i][j]
              , path = new Path()

            path.push(node)

            this.dfs_search(path)
        }
    }
}

Board.prototype.on_board = function(row, col) {
    return 0 <= row && row < this.row_count && 0 <= col && col < this.col_count
}

Board.prototype.get_unsearched_neighbours = function(path) {
    var last_node = path.nodes[path.nodes.length - 1]

    var offsets = [
        [-1, -1], [-1,  0], [-1, +1]
      , [ 0, -1],           [ 0, +1]
      , [+1, -1], [+1,  0], [+1, +1]
    ]

    var neighbours = []

    for (var i = 0, ii = offsets.length; i < ii; ++i) {
        var offset = offsets[i]
        if (this.on_board(last_node.row + offset[0], last_node.col + offset[1])) {

            var potential_node = this.nodes[last_node.row + offset[0]][last_node.col + offset[1]]
            if (!path.contains(potential_node)) {
                // Create a new path if on board and we haven't visited this node yet.
                neighbours.push(potential_node)
            }
        }
    }

    return neighbours
}

Board.prototype.dfs_search = function(path) {
    var path_word = path.to_word()

    if (this.dict.contains_exact(path_word) && path_word.length >= 3) {
        this.words.push(path_word)
    }

    var neighbours = this.get_unsearched_neighbours(path)

    for (var i = 0, ii = neighbours.length; i < ii; ++i) {
        var neighbour = neighbours[i]
        var new_path = path.clone()
        new_path.push(neighbour)

        if (this.dict.contains_prefix(new_path.to_word())) {
            this.dfs_search(new_path)
        }
    }
}

var Dict = function() {
    this.dict_array = []

    var dict_data = dictImport.toString();
    var dict_array = dict_data.split('\n')

    for (var i = 0, ii = dict_array.length; i < ii; ++i) {
        dict_array[i] = dict_array[i].toUpperCase()
    }

    this.dict_array = dict_array.sort()
}

Dict.prototype.contains_prefix = function(prefix) {
    // Binary search
    return this.search_prefix(prefix, 0, this.dict_array.length)
}

Dict.prototype.contains_exact = function(exact) {
    // Binary search
    return this.search_exact(exact, 0, this.dict_array.length)
}

Dict.prototype.search_prefix = function(prefix, start, end) {
    if (start >= end) {
        // If no more place to search, return no matter what.
        return this.dict_array[start].indexOf(prefix) > -1
    }

    var middle = Math.floor((start + end)/2)

    if (this.dict_array[middle].indexOf(prefix) > -1) {
        // If we prefix exists, return true.
        return true
    } else {
        // Recurse
        if (prefix <= this.dict_array[middle]) {
            return this.search_prefix(prefix, start, middle - 1)
        } else {
            return this.search_prefix(prefix, middle + 1, end)
        }
    }
}

Dict.prototype.search_exact = function(exact, start, end) {
    if (start >= end) {
        // If no more place to search, return no matter what.
        return this.dict_array[start] === exact
    }

    var middle = Math.floor((start + end)/2)

    if (this.dict_array[middle] === exact) {
        // If we prefix exists, return true.
        return true
    } else {
        // Recurse
        if (exact <= this.dict_array[middle]) {
            return this.search_exact(exact, start, middle - 1)
        } else {
            return this.search_exact(exact, middle + 1, end)
        }
    }
}

var board = [
    ['F', 'X', 'I', 'E']
  , ['A', 'M', 'L', 'O']
  , ['E', 'W', 'B', 'X']
  , ['A', 'S', 'T', 'U']
]

var dict = new Dict()

var b = Board.from_raw(board, dict)
b.update_potential_words()
console.log(JSON.stringify(b.words.sort(function(a, b) {
    return a.length - b.length
})))
