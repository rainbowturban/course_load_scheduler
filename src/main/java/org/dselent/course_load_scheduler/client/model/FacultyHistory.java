package org.dselent.course_load_scheduler.client.model;

import java.sql.Timestamp;
import java.time.Instant;

public class FacultyHistory extends Model{
	// attributes
	
	private Integer id;
	private String firstName;
	private String lastName;
	private String email;
	private Integer facultyTypeId;
	private Instant createdAt;
	private Instant updatedAt;
	private Boolean deleted;

	//getters and setters
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getFacultyTypeId() {
		return facultyTypeId;
	}

	public void setFacultyTypeId(Integer facultyTypeId) {
		this.facultyTypeId = facultyTypeId;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}
	
	public void setCreatedAt(Timestamp createdAt) {
		if(createdAt != null) {
			this.createdAt = createdAt.toInstant();
		}
	}

	public Instant getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Instant updatedAt) {
		this.updatedAt = updatedAt;
	}

	public void setUpdatedAt(Timestamp updatedAt) {
		if(updatedAt != null) {
			this.updatedAt = updatedAt.toInstant();
		}
	}
	
	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	//hashCode and equals
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createdAt == null) ? 0 : createdAt.hashCode());
		result = prime * result + ((deleted == null) ? 0 : deleted.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((facultyTypeId == null) ? 0 : facultyTypeId.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + ((updatedAt == null) ? 0 : updatedAt.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (!(obj instanceof FacultyHistory)) {
			return false;
		}
		FacultyHistory other = (FacultyHistory) obj;
		if (createdAt == null) {
			if (other.createdAt != null) {
				return false;
			}
		} else if (!createdAt.equals(other.createdAt)) {
			return false;
		}
		if (deleted == null) {
			if (other.deleted != null) {
				return false;
			}
		} else if (!deleted.equals(other.deleted)) {
			return false;
		}
		if (email == null) {
			if (other.email != null) {
				return false;
			}
		} else if (!email.equals(other.email)) {
			return false;
		}
		if (facultyTypeId == null) {
			if (other.facultyTypeId != null) {
				return false;
			}
		} else if (!facultyTypeId.equals(other.facultyTypeId)) {
			return false;
		}
		if (firstName == null) {
			if (other.firstName != null) {
				return false;
			}
		} else if (!firstName.equals(other.firstName)) {
			return false;
		}
		if (id == null) {
			if (other.id != null) {
				return false;
			}
		} else if (!id.equals(other.id)) {
			return false;
		}
		if (lastName == null) {
			if (other.lastName != null) {
				return false;
			}
		} else if (!lastName.equals(other.lastName)) {
			return false;
		}
		if (updatedAt == null) {
			if (other.updatedAt != null) {
				return false;
			}
		} else if (!updatedAt.equals(other.updatedAt)) {
			return false;
		}
		return true;
	}

	//toString
	@Override
	public String toString() {
		return "FacultyHistory [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", facultyTypeId=" + facultyTypeId + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt
				+ ", deleted=" + deleted + "]";
	}
	
	
	
	
}
