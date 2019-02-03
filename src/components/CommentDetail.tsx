import * as React from "react";
import Modal from 'react-responsive-modal';

interface IProps {
    currentComment: any
}

interface IState {
    open: boolean
}

export default class CommentDetail extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)   
        this.state = {
            open: false
        }

    }

	public render() {
        const currentComment = this.props.currentComment
        const { open } = this.state;
		return (
			<div className="container meme-wrapper">
                <div className="row meme-heading">
                    <b>{currentComment.title}</b>&nbsp; ({currentComment.tags})
                </div>
                <div className="row meme-date">
                    {currentComment.uploaded}
                </div>
                <div className="row meme-img">
                    <img src={currentComment.url}/>
                </div>
                
                <div className="row meme-done-button">
                    <div className="btn btn-primary btn-action" onClick={this.downloadComment.bind(this, currentComment.url)}>Download </div>
                    <div className="btn btn-primary btn-action" onClick={this.onOpenModal}>Edit </div>
                    <div className="btn btn-primary btn-action" onClick={this.methodNotImplemented.bind(this, currentComment.id)}>Delete </div>
                </div>
                <Modal open={open} onClose={this.onCloseModal}>
                    <form>
                        <div className="form-group">
                            <label>Meme Title</label>
                            <input type="text" className="form-control" id="meme-edit-title-input" placeholder="Enter Title"/>
                            <small className="form-text text-muted">You can edit any meme later</small>
                        </div>
                        <div className="form-group">
                            <label>Tag</label>
                            <input type="text" className="form-control" id="meme-edit-tag-input" placeholder="Enter Tag"/>
                            <small className="form-text text-muted">Tag is used for search</small>
                        </div>
                        <button type="button" className="btn" onClick={this.methodNotImplemented}>Save</button>
                    </form>
                </Modal>
            </div>
		);
    }

    // Modal Open
    private onOpenModal = () => {
        this.setState({ open: true });
	  };
    
    // Modal Close
    private onCloseModal = () => {
		this.setState({ open: false });
    };
    
    private methodNotImplemented() {
		alert("Method not implemented")
	}

    // Open meme image in new tab
    private downloadComment(url: any) {
        window.open(url);
    }
}