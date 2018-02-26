package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.SectionsInfo;

public class ReceiveGetOneFacultySectionInfoAction extends Action
{
	private List<SectionsInfo> list;

	public ReceiveGetOneFacultySectionInfoAction(List<SectionsInfo> list)
	{
		this.list = list;
	}

	public List<SectionsInfo> getList() {
		return list;
	}

	public void setList(List<SectionsInfo> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ReceiveGetOneFacultySectionInfoAction [list=");
		builder.append(list);
		builder.append("]");
		return builder.toString();
	}

}