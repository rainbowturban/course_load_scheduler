package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.Faculty;

public class ReceiveGetFacultyAction extends Action
{
	private List<Faculty> list;

	public ReceiveGetFacultyAction(List<Faculty> list)
	{
		this.list = list;
	}

	public List<Faculty> getList() {
		return list;
	}

	public void setList(List<Faculty> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ReceiveGetFacultyAction [list=");
		builder.append(list);
		builder.append("]");
		return builder.toString();
	}
}