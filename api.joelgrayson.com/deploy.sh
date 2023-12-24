#!/bin/bash

# Must use gcloud CLI version 455.0.0 for it to work

gcloud config set project joelgrayson
gcloud run deploy --source . api-joelgrayson-com

