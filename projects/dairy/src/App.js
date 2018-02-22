import React, { Component } from 'react';
import Dairy from './components/Dairy/dairy';
import Comments from './components/Comments/comments';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dItems : [],
      selectedItem: null
    }
  }
  componentDidMount(){
    document.addEventListener('keydown',this.keydownHandler);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown',this.keydownHandler);
  }
  componentWillMount(){
    if (localStorage.dItems === undefined){
    localStorage.setItem("dItems", JSON.stringify([
      {
        id: 1,
        name: "First item with custom name",
        comments: [{
          userImg: "http://via.placeholder.com/50/ff305a",
          comment: "Vivamus commodo vel tellus at suscipit. Sed semper, felis in mattis condimentum, ex urna pretium purus, a scelerisque magna purus sed enim. Aliquam vel ullamcorper nibh, id interdum leo. Vestibulum tristique leo risus, in sagittis erat ornare eget. Pellentesque a eleifend dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam diam lorem, gravida porta quam porttitor, condimentum vehicula nulla. Fusce iaculis gravida suscipit. Mauris massa leo, congue et egestas et, viverra ac urna" 
        },
        {
          userImg: "http://via.placeholder.com/50/ff305a",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
        }]
      },
      {
        id: 2,
        name: "Second item is active",
        comments: [{
          userImg: "http://via.placeholder.com/50/ff305a",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
        },
        {
          userImg: "http://via.placeholder.com/50/27ccc0",
          comment: "Aliquam vel ullamcorper nibh, id interdum leo. Vestibulum tristique leo risus, in sagittis erat ornare eget." 
        }]
      },
    ]))
  }
    this.setState({dItems: JSON.parse(localStorage.dItems)})
  }
  addNewItem = (e) => {
    e.preventDefault();
    let items = JSON.parse(localStorage.dItems);
    if (e.target.previousSibling.value){
    items.push({
      id: items.length + 1,
        name: e.target.previousSibling.value,
        comments: []
    })
    localStorage.setItem("dItems", JSON.stringify(items));
    this.setState({dItems: JSON.parse(localStorage.dItems)});
    e.target.previousSibling.value = "";
      }
    }
  deleteItem = (e) => {
    e.preventDefault();
    let index = e.target.getAttribute('data-tag');
    let items = JSON.parse(localStorage.dItems);
    items.splice(index,1);
    localStorage.setItem("dItems", JSON.stringify(items));
    this.setState({dItems: JSON.parse(localStorage.dItems)});
  }

  renderComments = (e) => {
    for (let i of document.querySelectorAll("div.selected")){
      i.style.display = "none";
    }
    let index = e.target.getAttribute('data-index');
    if (document.querySelectorAll("div.selected")[index]){
      document.querySelectorAll("div.selected")[index].style.display = "block";
    }
    this.setState({selectedItem: index})
  }

  addComment = (e) => {
    if (e.target.value){
    let items = JSON.parse(localStorage.dItems);
    items[this.state.selectedItem].comments.push({
      userImg: e.target.previousSibling.getAttribute('src'),
      comment: e.target.value
    });
    localStorage.setItem("dItems", JSON.stringify(items));
    this.setState({dItems: JSON.parse(localStorage.dItems)});
    e.target.value = "";
  }
}
  keydownHandler = (e) => {
    if(e.keyCode===13 && e.ctrlKey) this.addComment(e)
  };
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Dairy APP</h1>
          <span>Comment with no sense</span>
        </div>
        <Dairy addNewItem={this.addNewItem} dItems={this.state.dItems} deleteItem={this.deleteItem} renderComments={this.renderComments}/>
        <Comments dItems={this.state.dItems} selectedItem={this.state.selectedItem} addComment={this.keydownHandler} />
      </div>
    );
  }
}

export default App;
