package org.dselent.course_load_scheduler.client.model;

public class Days extends Model {
	// attributes

	private Integer id;
	private String day;

	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getDay() {
		return day;
	}
	
	public void setDay(String day) {
		this.day = day;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((day == null) ? 0 : day.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		if (!(obj instanceof Days)) {
			return false;
		}
		Days other = (Days) obj;
		if (day == null) {
			if (other.day != null) {
				return false;
			}
		} else if (!day.equals(other.day)) {
			return false;
		}
		if (id == null) {
			if (other.id != null) {
				return false;
			}
		} else if (!id.equals(other.id)) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Days [id=");
		builder.append(id);
		builder.append(", day=");
		builder.append(day);
		builder.append("]");
		return builder.toString();
	}
	
}