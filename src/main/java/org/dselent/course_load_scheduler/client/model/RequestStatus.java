package org.dselent.course_load_scheduler.client.model;

/**Table that holds all the possible user statuses
 * 0 for Approved
 * 1 for Denied
 * 2 for Pending
 * New requests initially have status 2 for Pending
 * @author Frank
 *
 */
public class RequestStatus extends Model
{
	// attributes
	
	private Integer id;
	private String status;

	//getters and setter methods
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RequestStatus other = (RequestStatus) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "RequestStatus [id=" + id + ", status=" + status + "]";
	}
		
}
