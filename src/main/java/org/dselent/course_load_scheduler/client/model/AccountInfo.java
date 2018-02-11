package org.dselent.course_load_scheduler.client.model;

public class AccountInfo {
	// attributes
	private String facultyFirstName;
	private String facultyLastName;
	private String facultyEmail;
	private String facultyType;
	private String accountType;

	//getters and setters
	public String getFacultyFirstName() {
		return facultyFirstName;
	}

	public void setFacultyFirstName(String facultyFirstName) {
		this.facultyFirstName = facultyFirstName;
	}

	public String getFacultyLastName() {
		return facultyLastName;
	}

	public void setFacultyLastName(String facultyLastName) {
		this.facultyLastName = facultyLastName;
	}

	public String getFacultyEmail() {
		return facultyEmail;
	}

	public void setFacultyEmail(String facultyEmail) {
		this.facultyEmail = facultyEmail;
	}

	public String getFacultyType() {
		return facultyType;
	}

	public void setFacultyType(String facultyType) {
		this.facultyType = facultyType;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	
	//hashCode and equals
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((accountType == null) ? 0 : accountType.hashCode());
		result = prime * result + ((facultyEmail == null) ? 0 : facultyEmail.hashCode());
		result = prime * result + ((facultyFirstName == null) ? 0 : facultyFirstName.hashCode());
		result = prime * result + ((facultyLastName == null) ? 0 : facultyLastName.hashCode());
		result = prime * result + ((facultyType == null) ? 0 : facultyType.hashCode());
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
		if (!(obj instanceof AccountInfo)) {
			return false;
		}
		AccountInfo other = (AccountInfo) obj;
		if (accountType == null) {
			if (other.accountType != null) {
				return false;
			}
		} else if (!accountType.equals(other.accountType)) {
			return false;
		}
		if (facultyEmail == null) {
			if (other.facultyEmail != null) {
				return false;
			}
		} else if (!facultyEmail.equals(other.facultyEmail)) {
			return false;
		}
		if (facultyFirstName == null) {
			if (other.facultyFirstName != null) {
				return false;
			}
		} else if (!facultyFirstName.equals(other.facultyFirstName)) {
			return false;
		}
		if (facultyLastName == null) {
			if (other.facultyLastName != null) {
				return false;
			}
		} else if (!facultyLastName.equals(other.facultyLastName)) {
			return false;
		}
		if (facultyType == null) {
			if (other.facultyType != null) {
				return false;
			}
		} else if (!facultyType.equals(other.facultyType)) {
			return false;
		}
		return true;
	}

	//toString
	@Override
	public String toString() {
		return "AccountInfo [facultyFirstName=" + facultyFirstName + ", facultyLastName=" + facultyLastName
				+ ", facultyEmail=" + facultyEmail + ", facultyType=" + facultyType + ", accountType=" + accountType
				+ "]";
	}


}
