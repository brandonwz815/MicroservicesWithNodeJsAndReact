netstat -aon | findstr :80

------ to use gcloud --------

gcloud auth application-default login

skaffold dev

------ to create secret -------

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

------ to port-forward for nats streaming -------

kubectl port-forward nats-depl-5b6d549ff-c7xhk 4222:4222
npm run publish
npm run listen

------ monitoring nats streaming -------

kubectl port-forward nats-depl-5b6d549ff-c7xhk 8222:8222

localhost:8222/streaming
localhost:8222/streaming/channelsz?subs=1
