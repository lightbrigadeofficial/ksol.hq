# KSOL HQ — Personnel Management Portal

> **Kali Special Operations Legion (KSOL)**  
> Personnel, qualifications, awards, unit assignments, rank history, and service records management system.

---

## Overview

The **KSOL HQ Personnel Portal** is a web-based personnel management system developed for the Kali Special Operations Legion.

The system provides authenticated personnel with access to their own service record while keeping personnel data, qualifications, awards, unit assignments, rank history, appointments, and service logs organized through a centralized database.

The project is designed around a clean, military-inspired interface with a focus on structured personnel records and reliable database-driven information.

---

## Features

### Personnel Records

Each member can view their current personnel record, including:

- Service Number
- Display Name
- Callsign
- Rank
- Unit
- Appointment
- Status
- Join Date
- Service Duration
- Time in Current Rank

---

### Qualifications

Personnel qualifications are stored and displayed directly from the database.

Examples include:

- Basic Training
- Basic Combat Certification
- CQB Qualification
- Specialist qualifications
- Other KSOL training certifications

Each qualification can contain:

- Qualification name
- Awarded date
- Awarded by
- Notes

---

### Awards & Insignia

The portal supports database-driven personal decorations and insignia.

Supported categories include:

- Service Ribbons
- Award Ribbons
- Qualification Badges
- Tabs
- Unit Insignia

Each award contains catalog information such as:

- Award code
- Name
- Description
- Category
- Image
- Precedence

Individual awards are assigned to personnel through the personnel-award records.

---

### Unit Management

Current unit assignments are displayed using the KSOL unit catalog.

Unit records can contain:

- Unit name
- Unit insignia
- Description

Historical unit assignments are maintained separately so personnel movement can be tracked over time.

---

### Rank History

Rank history records allow the system to track a member's career progression.

Each record may contain:

- Rank
- Effective date
- End date
- Notes
- Changed by

The current rank record is also used to calculate the member's **Days in Current Rank**.

---

### Appointments

Personnel appointments are stored separately from the personnel record.

Appointment records can contain:

- Appointment name
- Rank band
- Description

This allows the portal to display additional information about a member's current appointment without hardcoding appointment descriptions into the webpage.

---

### Service History

The system supports custom service logs for events that do not belong in the standard personnel fields.

Examples include:

- Training completion
- Qualification assessments
- NCO boards
- Commendations
- Remarks
- Disciplinary actions
- Other service events

Service logs can contain:

- Date
- Category
- Title
- Description
- Details
- Created by

---

## Database Architecture

The application uses **Supabase** as its backend and database.

### Personnel Data

| Table | Purpose |
|---|---|
| `personnel` | Current personnel records |
| `personnel_awards` | Awards assigned to individuals |
| `qualifications` | Qualifications assigned to individuals |
| `rank_history` | Historical and current rank records |
| `unit_history` | Historical and current unit assignments |
| `service_logs` | Custom service records |

### Catalog / Reference Data

| Table | Purpose |
|---|---|
| `award_catalog` | Master list of ribbons, badges and tabs |
| `unit_catalog` | Master list of KSOL units and insignia |
| `appointments` | Master list of appointments |

### System Data

| Table | Purpose |
|---|---|
| `audit_log` | Administrative and system activity records |

---

## How the Data Works

The portal separates **master catalog information** from **individual personnel information**.

For example:

```text
award_catalog
     │
     │ defines the award
     ▼
personnel_awards
     │
     │ assigns the award to a person
     ▼
personnel
     │
     ▼
portal.html
