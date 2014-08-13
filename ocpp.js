var OCPP = {
  wsdl: {
    BootNotificationRequest: {
      chargePointVendor: 'DBT',
      chargePointModel: 'NQC-ACDC',
      chargePointSerialNumber: 'gir.vat.mx.000e48',
      chargeBoxSerialNumber: 'gir.vat.mx.000e48',
      firmwareVersion: '1.0.49',
      iccid: '',
      imsi: '',
      meterType: 'DBT NQC-ACDC',
      meterSerialNumber: 'gir.vat.mx.000e48'
    },

    BootNotificationResponse: {
      status: 'Accepted',
      currentTime: '',
      hearbeatInterval: 1200
    },

    HeartbeatRequest: {
    },

    HeartbeatResponse: {
      currentTime: ''
    },

    AuthorizeRequest: {
      idTag: ''
    },

    AuthorizeResponse: {
      idTagInfo: {
        status: 'Accepted',
        expiryDate: '2015-5-5',
        parentIdtag: 'PARENT'
      }
    },

    StartTransactionRequest: {
      connectorId: 1,
      idTag: 'B4F62CEF',
      timestamps: "",
      meterStart: 0,
      reservationId: 0
    },

    StartTransactionResponse: {
      transactionId: 0,
      idTagInfo: {
        status: 'Accepted',
        expiryDate: "",
        parentIdTag: 'PARENT'
      }
    },

    StopTransactionRequest: {

    },

    StopTransactionRequest: {
      transactionId: 0,
      idTag: 'B4F62CEF',
      timestamps: "",
      meterStop: 20,
      transactionData: ''
    },

    StopTransactionResponse: {
      idTagInfo: {
        status: 'Expired',
        expiryDate: "2015-05-05",
        parentIdTag: 'PARENT'
      }
    },

    RemoteStartTransactionRequest: {
      idTag: '044943123F1D80',
      connectorId: 1
    },

    RemoteStartTransactionResponse: {
      status: 'Accepted'
    },

    RemoteStopTransactionRequest: {
      transactionId: 1
    },

    RemoteStopTransactionResponse: {
      status: 'Accepted'
    },

    MeterValuesRequest: {
      connectorId: 1,
      transactionId: 0,
      values: ''
    },

    MeterValuesResponse: {},

    DataTransferRequest: {
      vendorId: 'fr.tm.cnr',
      messageId: 'GetChargeInstruchtion',
      data: ''
    },

    DataTransferRequest: {
      status: 'Accepted',
      data: '{"transactionId":1, "maxPower":3, "expiration":' +
        '"2015-05-05", "userWarning": false}'
    }
  }
};

module.exports = OCPP;
