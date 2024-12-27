#!/bin/bash

# Must use gcloud CLI version 455.0.0 for it to work

gcloud config set project joelgrayson
gcloud run deploy --source . api-joelgrayson-com

# https://console.cloud.google.com/run/detail/us-east4/api-joelgrayson-com/revisions?inv=1&invt=AblQgw&project=joelgrayson

