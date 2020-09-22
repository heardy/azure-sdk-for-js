/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: "2020-07-20-preview2",
    type: {
      name: "String"
    }
  }
};
export const endpoint: coreHttp.OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    required: true,
    serializedName: "endpoint",
    defaultValue: "",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const id: coreHttp.OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    required: true,
    serializedName: "id",
    type: {
      name: "String"
    }
  }
};
