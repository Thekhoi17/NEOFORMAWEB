// src/components/Product/ProductPage.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  productName: Yup.string().required('Tên sản phẩm không được để trống'),
  description: Yup.string().required('Mô tả sản phẩm không được để trống'),
  size: Yup.string().required('Vui lòng chọn kích cỡ'),
  color: Yup.string().required('Vui lòng chọn màu sắc'),
  quantity: Yup.number()
    .required('Số lượng không được để trống')
    .min(1, 'Số lượng phải lớn hơn 0')
    .integer('Số lượng phải là số nguyên'),
});

const ProductPage = () => {
  const formik = useFormik({
    initialValues: {
      productName: '',
      description: '',
      size: '',
      color: '',
      quantity: 1,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Thông tin sản phẩm:', values);
    },
  });

  return (
    <div style={styles.container}>
      <h2>Thêm vào giỏ hàng</h2>
      <form onSubmit={formik.handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="productName">Tên sản phẩm</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formik.values.productName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />
          {formik.touched.productName && formik.errors.productName && (
            <div style={styles.error}>{formik.errors.productName}</div>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="description">Mô tả sản phẩm</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />
          {formik.touched.description && formik.errors.description && (
            <div style={styles.error}>{formik.errors.description}</div>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="size">Kích cỡ</label>
          <select
            id="size"
            name="size"
            value={formik.values.size}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          >
            <option value="">Chọn kích cỡ</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          {formik.touched.size && formik.errors.size && (
            <div style={styles.error}>{formik.errors.size}</div>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="color">Màu sắc</label>
          <select
            id="color"
            name="color"
            value={formik.values.color}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          >
            <option value="">Chọn màu sắc</option>
            <option value="Pink">Hồng</option>
            <option value="Black">Đen</option>
            <option value="White">Trắng</option>
            <option value="Navy">Xanh biển</option>
            <option value="Beige">Be</option>
          </select>
          {formik.touched.color && formik.errors.color && (
            <div style={styles.error}>{formik.errors.color}</div>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="quantity">Số lượng</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min="1"
            style={styles.input}
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <div style={styles.error}>{formik.errors.quantity}</div>
          )}
        </div>

        <button type="submit" style={styles.submitButton}>Thêm sản phẩm</button>
      </form>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    width: '100%',
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
};

export default ProductPage;
