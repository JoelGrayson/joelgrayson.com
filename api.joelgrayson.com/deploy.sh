#!/bin/bash

gcloud config set project joelgrayson
gcloud run deploy --source . api-joelgrayson-com
