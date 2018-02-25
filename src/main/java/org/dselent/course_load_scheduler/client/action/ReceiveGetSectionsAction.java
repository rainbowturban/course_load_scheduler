package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.SectionsInfo;

public class ReceiveGetSectionsAction extends Action{
	private List<SectionsInfo> sectionList;

	public ReceiveGetSectionsAction() {
		sectionList = null;
	}
	
	public ReceiveGetSectionsAction(List<SectionsInfo> sectionList) {
		this.sectionList = sectionList;
	}
	
	public List<SectionsInfo> getSections() {
		return sectionList;
	}

	public void setSections(List<SectionsInfo> sectionList) {
		this.sectionList = sectionList;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(sectionList);

		return sb.toString();
	}

}
