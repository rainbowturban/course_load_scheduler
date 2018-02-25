package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.CourseSections;

public class ReceiveGetSectionsAction extends Action{
	private List<CourseSections> sectionList;

	public ReceiveGetSectionsAction() {
		sectionList = null;
	}
	
	public ReceiveGetSectionsAction(List<CourseSections> sectionList) {
		this.sectionList = sectionList;
	}
	
	public List<CourseSections> getSections() {
		return sectionList;
	}

	public void setSections(List<CourseSections> sectionList) {
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
