import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import './editor.css';

function HtmlEditor(props) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const [isEditorVisible, setIsEditorVisible] = useState(true);
  const [convertedContent, setConvertedContent] = useState('');

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  const onEditorStateChange = (editorState) => {
    console.log("editorState", editorState);
    setEditorState(editorState);
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    console.log("currentContentAsHTML", currentContentAsHTML);

  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  return <React.Fragment>
    <Row justify='end' className='editor-icons'>
      <Col flex={5}></Col>
      <Col flex={'100px'} style={{fontSize: '20px'}} className={isEditorVisible ? 'active' : ''} onClick={() => setIsEditorVisible(true)}><EditOutlined /></Col> |
      <Col flex={'100px'} style={{fontSize: '20px'}} className={!isEditorVisible ? 'active' : ''} onClick={() => setIsEditorVisible(false)}><EyeOutlined /></Col> 
    </Row>
    {isEditorVisible ? (
      <div className='editor-area'>
        <Editor editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={onEditorStateChange} />;
      </div>
    ) :  <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
    }
    
  </React.Fragment>
}
const styles = React.st

export default HtmlEditor;