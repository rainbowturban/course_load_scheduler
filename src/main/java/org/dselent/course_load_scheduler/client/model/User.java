package org.dselent.course_load_scheduler.client.model;

//import java.sql.Timestamp;
import java.util.Date;

public class User extends Model
{
	// attributes
	// changed instant data types to string (dselent)
	// was too lazy to convert the json strings to instants (deslent)
	
	private Integer id;
	private Integer accountTypeId;  
	private Integer facultyId;
	//private String encryptedPassword;
	//private String passwordSalt;
	//private Timestamp createdAt;
	//private Timestamp updatedAt;
	private Boolean deleted;
	private Date createdAt;
	private Date updatedAt;
	 
	public Integer getId()
	{
		return id;
	}

	public void setId(Integer id)
	{
		this.id = id;
	}

	public Integer getAccountTypeId()
	{
		return accountTypeId;
	}

	public void setAccountTypeId(Integer accountTypeId)
	{
		this.accountTypeId = accountTypeId;
	}

	public Integer getFacultyId()
	{
		return facultyId;
	}

	public void setFacultyId(Integer facultyId)
	{
		this.facultyId = facultyId;
	}

	

	public Date getCreatedAt()
	{
		return createdAt;
	}

	

	public Date getUpdatedAt()
	{
		return updatedAt;
	}

	
	
	public Boolean getDeleted()
	{
		return deleted;
	}

	public void setDeleted(Boolean deleted)
	{
		this.deleted = deleted;
	}

	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createdAt == null) ? 0 : createdAt.hashCode());
		result = prime * result + ((accountTypeId == null) ? 0 : accountTypeId.hashCode());
		result = prime * result + ((facultyId == null) ? 0 : facultyId.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((deleted == null) ? 0 : deleted.hashCode());
		result = prime * result + ((updatedAt == null) ? 0 : updatedAt.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj)
	{
		if (this == obj)
		{
			return true;
		}
		if (obj == null)
		{
			return false;
		}
		if (!(obj instanceof User))
		{
			return false;
		}
		User other = (User) obj;
		if (createdAt == null)
		{
			if (other.createdAt != null)
			{
				return false;
			}
		}
		else if (!createdAt.equals(other.createdAt))
		{
			return false;
		}
		if (accountTypeId == null)
		{
			if (other.accountTypeId != null)
			{
				return false;
			}
		}
		else if (!accountTypeId.equals(other.accountTypeId))
		{
			return false;
		}
		
		if (facultyId == null)
		{
			if (other.facultyId != null)
			{
				return false;
			}
		}
		else if (!facultyId.equals(other.facultyId))
		{
			return false;
		}
		if (id == null)
		{
			if (other.id != null)
			{
				return false;
			}
		}
		else if (!id.equals(other.id))
		{
			return false;
		}
		if (deleted == null)
		{
			if (other.deleted != null)
			{
				return false;
			}
		}
		else if (!deleted.equals(other.deleted))
		{
			return false;
		}
		
		if (updatedAt == null)
		{
			if (other.updatedAt != null)
			{
				return false;
			}
		}
		else if (!updatedAt.equals(other.updatedAt))
		{
			return false;
		}
		return true;
	}
	

	@Override
	public String toString()
	{
		StringBuilder builder = new StringBuilder();
		builder.append("Users [id=");
		builder.append(id);
		builder.append(", accountTypeId=");
		builder.append(accountTypeId);
		builder.append(", facultyId=");
		builder.append(facultyId);
		builder.append(", encryptedPassword=");
		builder.append(", passwordSalt=");
		builder.append(", createdAt=");
		builder.append(createdAt);
		builder.append(", updatedAt=");
		builder.append(updatedAt);
		builder.append(", deleted=");
		builder.append(deleted);
		builder.append("]");
		return builder.toString();
	}
	
}
