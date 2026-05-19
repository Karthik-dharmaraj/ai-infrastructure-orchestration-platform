# AI Infrastructure Orchestration Platform

##  Overview

The **AI Infrastructure Orchestration Platform** is a full-stack cloud-native system designed to automate Kubernetes infrastructure provisioning, deployment, and management using:

- React Frontend Dashboard
- FastAPI Backend Orchestration Engine
- Kubernetes (v1.30)
- VMware Workstation-based virtual infrastructure
- Ansible & Kubespray automation

The platform acts as a **future AI-powered Infrastructure Control Plane** enabling one-click deployment, scaling, monitoring, and orchestration of Kubernetes environments.

---

##  High-Level Architecture

React Frontend  
↓  
FastAPI Backend  
↓  
Workflow / Automation Engine  
↓  
Ansible / Kubespray  
↓  
VMware Workstation (Virtual Machines)  
↓  
Kubernetes Cluster (Ubuntu Nodes)

---

##  Infrastructure Setup (Kubernetes on VMware Workstation)

The Kubernetes cluster is deployed on a **virtualized lab environment using VMware Workstation**.

### Virtualization Layer
- VMware Workstation used to create and manage virtual machines
- Ubuntu Server installed on all nodes
- NAT networking configured for inter-node communication

###  Kubernetes Cluster Architecture
- 1 Master Node (Control Plane)
- 2 Worker Nodes (Compute Nodes)
- Kubernetes Version: v1.30

###  Cluster Setup Approach
- Kubernetes cluster provisioned on Ubuntu virtual machines
- Cluster bootstrapped using Kubespray / Ansible automation
- kubectl used for cluster verification and management

###  Networking
- NAT-based networking between all VMs
- Pod-to-pod communication enabled via Kubernetes CNI plugin
- Cluster networking simulates production-like environment

###  Purpose of This Setup
This setup replicates a **real-world cloud infrastructure inside a local lab environment**, enabling:

- Kubernetes cluster lifecycle testing
- Infrastructure automation workflows
- CI/CD pipeline integration
- AI orchestration platform development

---

##  Key Features

###  Infrastructure Automation
- One-click Kubernetes cluster deployment
- Automated provisioning using Ansible & Kubespray
- VMware-based virtual infrastructure setup

###  Kubernetes Operations
- Cluster health monitoring
- Node and workload management
- Scaling (manual + future AI-driven)

###  Backend Orchestration
- FastAPI-based REST APIs
- Workflow automation engine
- Kubernetes API integration layer

###  Frontend Dashboard
- React-based control panel
- Infrastructure visualization UI
- API-driven orchestration interface

### 🤖 AI Vision (Future Scope)
- Natural language infrastructure control
- AI-based deployment planning
- Self-healing infrastructure automation
- Multi-cluster Kubernetes orchestration

---

##  Tech Stack

### Frontend
- React.js
- JavaScript / JSX
- Axios
- HTML / CSS

### Backend
- FastAPI
- Python 3.x
- Uvicorn
- Kubernetes Python Client

### Infrastructure
- VMware Workstation
- Ubuntu Linux (VMs)
- Kubernetes v1.30
- NAT Networking

### Automation
- Ansible
- Kubespray

---

##  Project Structure

```text
ai-platform/
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── main.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── kubernetes/
├── ansible/
├── docs/
└── README.md
