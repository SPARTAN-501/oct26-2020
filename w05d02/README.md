# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Breakout: Convert 2 Spreadsheets [15 mins]
- [x] Student Suggestion ERD(s)

### Primary Key
* Uniquely identify a particular record
* unique within the table
* can be any data type even strings
* hot take: primary keys should ALWAYS be integers
* resist the urge to have compound/composite keys
* Foreign key => represents the entire other record
* FK must be the same type as the PK

### Naming Conventions
* OPINIONATED
* everything is lower-case / snake_case
* table names are always plural
* PK naming: id => id, user_id
* FK naming: is singular table name + `_id` 

### Data Types
* This used to be a HUGE consideration
* Memory WAS expensive
* Each field in a table has to have a data type
* The db will set aside enough space in memory
* Nowadays memory is CHEAP
* DATE, BOOLEAN, VARCHAR, CHAR, INTEGER
* Phone numbers, postal codes => H0H 0H0, 90210, 00210

### Relationship Types
* One-to-one: 1 record in the 1st table is related to only 1 record in the 2nd
* One-to-many: 1 record in the 1st table is related to 1 or more in the 2nd
* Many-to-many: 1 or more records in the 1st table is related to 1 or more in the 2nd (implemented with a 3rd table)

### Design Concepts
* Make fields required => think about how the record will look at insertion time (creation time)
* Default values => asign intelligent values, timestamp (created_at NOW())
* Calculated fields => field whose value can be derived from one or more other fields (eg. full_name => first_name + last_name)
* Pull repeating values out to a lookup table
Vancouver, Vancity, Van, Vancover
Calgary, calgary, Calgry

enumerated values => list of valid values for a field

order_type => 'purchase', 'sales'














# 
