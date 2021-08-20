import React, { useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const initialState = {
  previewVisible: false,
  previewImage: '',
  previewTitle: '',
  fileList: [],
  imgLink: '',
};

const PicturesWall = ({ ProductDetails, setProductDetails }) => {
  const [imageSet, setImageSet] = useState(initialState);

  const handleCancel = () => setImageSet({ previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setImageSet({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const handleChange = ({ fileList }) => {
    // console.log(fileList[0]);

    //  setImageSet({ ...imageSet , fileList : [ fileList[0]] })
    setImageSet({ fileList });
  };
  // console.log(imageSet);

  // setProductDetails({ ...ProductDetails , image : imageSet.fileList[ imageSet.fileList.length - 1]})

  const { previewVisible, previewImage, fileList, previewTitle } = imageSet;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {/* {fileList.length >= 8 ? null : uploadButton} */}
        {uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        {/* { console.log(previewImage) } */}
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default PicturesWall;
