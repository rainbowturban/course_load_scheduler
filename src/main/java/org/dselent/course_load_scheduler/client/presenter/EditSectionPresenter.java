package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.SectionType;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.Terms;

public interface EditSectionPresenter extends BasePresenter{
	
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void editSection();
	
	void retrieveTerm();
	void retrieveType();
	void retrieveTime();
	int fillSectionTerms(int initTermValue, List<Terms> termsList);
	int fillSectionTypes(int initTypeValue, List<SectionType> typesList);
	int fillSectionStart(int initStartTimeValue, List<StartTime> startTimeList);
	int fillSectionEnd(int initEndTimeValue, List<EndTime> endTimeList);
	String determineDays();
	void cancelEditSection();
}
