package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.CourseSections;
import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.SectionType;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.Terms;

public interface AddSectionPresenter extends BasePresenter{
	
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void addSection();
	
	void retrieveTerm();
	void retrieveType();
	void retrieveTime();
	void fillSectionTerms(List<Terms> termsList);
	void fillSectionTypes(List<SectionType> typesList);
	void fillSectionStart(List<StartTime> startTimeList);
	void fillSectionEnd(List<EndTime> endTimeList);
	String determineDays();
	void cancelAddSection();

}
