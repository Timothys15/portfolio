import * as React from "react";
import { FABButton } from 'react-mdl';

interface IProps {
    comments: any[],
    selectNewComment: any,
    searchByTag: any
}

export default class CommentList extends React.Component<IProps, {}> {
    constructor(props: any) {
        super(props)   
        this.searchByTag = this.searchByTag.bind(this)
    }

	public render() {
		return (
			<div className="container meme-list-wrapper">
                <div className="row meme-list-heading">
                    <div className="input-group">
                        <input type="text" id="search-tag-textbox" className="form-control" placeholder="Search By Tags" />
                        <div className="input-group-append">
                            <FABButton colored={true} ripple={true}>
                                <div className="click-me-btn" onClick = {this.searchByTag}>Search</div>
                            </FABButton>
                        </div>
                    </div>  
                </div>
                <div className="row meme-list-table">
                    <table className="table table-striped">
                        <tbody>
                            {this.createTable()}
                        </tbody>
                    </table>
                </div>
            </div>
		);
    }

    // Construct table using meme list
	private createTable() {
        const table:any[] = []
        const commentList = this.props.comments
        if (commentList == null) {
            return table
        }

        for (let i = 0; i < commentList.length; i++) {
            const children = []
            const comment = commentList[i]
            children.push(<td key={"id" + i}>{comment.id}</td>)
            children.push(<td key={"author" + i}>{comment.author}</td>)
            children.push(<td key={"description" + i}>{comment.description}</td>)
            children.push(<td key={"tags" + i}>{comment.tags}</td>)
            table.push(<tr key={i+""} id={i+""} onClick= {this.selectRow.bind(this, i)}>{children}</tr>)
        }
        return table
    }
    
    // Meme selection handler to display selected meme in details component
    private selectRow(index: any) {
        const selectedMeme = this.props.comments[index]
        if (selectedMeme != null) {
            this.props.selectNewComment(selectedMeme)
        }
    }

    // Search meme by tag
    private searchByTag() {
        const textBox = document.getElementById("search-tag-textbox") as HTMLInputElement
        if (textBox === null) {
            return;
        }
        const tag = textBox.value 
        this.props.searchByTag(tag)  
    }

}