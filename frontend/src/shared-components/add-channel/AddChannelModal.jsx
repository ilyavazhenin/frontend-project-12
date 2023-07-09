/* eslint-disable react-hooks/exhaustive-deps */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import socket from '../../utils/socket-init';
import CurrentUserContext from '../../utils/auth-context';

const AddChannelModal = (props) => {
  const { t } = useTranslation();
  const { user } = useContext(CurrentUserContext);
  const { onHide, show, allchannels } = props;

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    validationSchema: Yup.object({
      channelName: Yup.string()
        .min(3, t('chat.errors.from3to20symbls'))
        .max(20, t('chat.errors.from3to20symbls'))
        .required(t('general.errors.requiredField'))
        .notOneOf(allchannels, t('chat.errors.uniqueChannel')),
    }),
    onSubmit: async (values) => {
      const newChannel = {
        name: values.channelName,
        createdByUser: user.userName,
      };
      socket.connect();
      await socket.emit('newChannel', newChannel, () => {});
      onHide();
      formik.resetForm();
    },
  });

  return (
    <Modal
      onHide={onHide}
      show={show}
      allchannels={allchannels}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t('chat.modals.addChannel')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="channelName"
          >
            <Form.Label>{t('chat.modals.channelName')}</Form.Label>
            <Form.Control
              type="text"
              name="channelName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.channelName}
              autoFocus
            />

            <Form.Text className="text-danger">
              {formik.touched.channelName && formik.errors.channelName ? (
                <div className="text-danger">{formik.errors.channelName}</div>
              ) : null}
            </Form.Text>
          </Form.Group>
          <Row
            xs="auto"
            className="justify-content-end"
          >
            <Col>
              <Button
                onClick={onHide}
                variant="secondary"
              >
                {t('chat.modals.cancel')}
              </Button>
            </Col>
            <Col>
              <Button
                type="submit"
                variant="primary"
              >
                {t('chat.modals.send')}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddChannelModal;