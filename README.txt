gcloud auth application-default login

skaffold dev

------ to create secret -------
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf