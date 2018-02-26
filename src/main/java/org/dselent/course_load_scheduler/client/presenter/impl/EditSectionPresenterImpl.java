package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadEditCourseAction;
import org.dselent.course_load_scheduler.client.action.SendGetEndTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetSectionTypesAction;
import org.dselent.course_load_scheduler.client.action.SendGetStartTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetTermsAction;
import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditSectionEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveEndTimesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetSectionTypesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetTermsEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetEndTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetSectionTypesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetTermsEvent;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.CourseSections;
import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.SectionType;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.Terms;
import org.dselent.course_load_scheduler.client.presenter.EditSectionPresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.EditSectionView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.ListBox;
import com.google.inject.Inject;

public class EditSectionPresenterImpl extends BasePresenterImpl implements EditSectionPresenter {
	private IndexPresenter parentPresenter;
	private EditSectionView view;
	//variables to hold previous info
	private CourseInfo course = new CourseInfo();
	private CourseSections oldSection = new CourseSections();

	@Inject
	public EditSectionPresenterImpl(IndexPresenter parentPresenter, EditSectionView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
	}

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
		registration = eventBus.addHandler(LoadEditSectionEvent.TYPE, this);
		eventBusRegistration.put(LoadEditSectionEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveGetTermsEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetTermsEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveGetSectionTypesEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetSectionTypesEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveStartTimesEvent.TYPE, this);
		eventBusRegistration.put(ReceiveStartTimesEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveEndTimesEvent.TYPE, this);
		eventBusRegistration.put(ReceiveEndTimesEvent.TYPE, registration);		
	}

	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public EditSectionView getView() {
		return view;
	}

	@Override
	public IndexPresenter getParentPresenter()
	{
		return parentPresenter;
	}

	@Override
	public void setParentPresenter(IndexPresenter parentPresenter)
	{
		this.parentPresenter = parentPresenter;
	}

	//@SuppressWarnings("deprecation")
	@Override
	public void onLoadEditSection(LoadEditSectionEvent evt) {
		oldSection = evt.getAction().getSectionInfo();
		
		//Info to return to edit course page
		course = evt.getAction().getCourseInfo();

		//Retrieve term, sectionType, days and time fields with previous info and Course info
		if(oldSection != null) {
			retrieveTerm();
			retrieveType();
			retrieveTime();
			
			//Code for setting previously selected days
			CheckBox monday = view.getMondayCheckBox();
			CheckBox tuesday = view.getTuesdayCheckBox();
			CheckBox wednesday = view.getWednesdayCheckBox();
			CheckBox thursday = view.getThursdayCheckBox();
			CheckBox friday = view.getFridayCheckBox();

			//Clear potentially checked boxes (depricated method, but couldn't seem to find better one?)
			monday.setChecked(false);
			tuesday.setChecked(false);
			wednesday.setChecked(false);
			thursday.setChecked(false);
			friday.setChecked(false);

			//From given string of days, determine which days are checked
			if(oldSection.getDays().contains("M")) {
				monday.setChecked(true);
			}
			if(oldSection.getDays().contains("T")) {
				tuesday.setChecked(true);
			}
			if(oldSection.getDays().contains("W")) {
				wednesday.setChecked(true);
			}
			if(oldSection.getDays().contains("R")) {
				thursday.setChecked(true);
			}
			if(oldSection.getDays().contains("F")) {
				friday.setChecked(true);
			}
			
			this.go(parentPresenter.getView().getViewRootPanel());
		}
		else {
			Window.alert("A section must be selected to edit");
		}
	}

	@Override
	public void retrieveTerm(){
		//Sends event to DB to retrieve terms
		eventBus.fireEvent(new SendGetTermsEvent(new SendGetTermsAction()));
	}
	
	@Override
	public void onReceiveGetTerms(ReceiveGetTermsEvent evt) {
		int termIndex = fillSectionTerms(oldSection.getTermsId(), evt.getAction().getTerms());
		view.getTermComboBox().setSelectedIndex(termIndex);
	}

	//gets section type info about sections
	@Override
	public void retrieveType(){
		//Populates types from DB
		eventBus.fireEvent(new SendGetSectionTypesEvent(new SendGetSectionTypesAction()));
	}
	
	@Override
	public void onReceiveGetSectionTypes(ReceiveGetSectionTypesEvent evt) {
		int typeIndex = fillSectionTypes(oldSection.getSectionTypeId(), evt.getAction().getSectionTypes());
		view.getSectionTypeComboBox().setSelectedIndex(typeIndex);		
	}

	//gets start/end time info about sections
	@Override
	public void retrieveTime(){
		//Populates times from DB
		eventBus.fireEvent(new SendGetStartTimesEvent(new SendGetStartTimesAction(user)));
		eventBus.fireEvent(new SendGetEndTimesEvent(new SendGetEndTimesAction(user)));
	}
	
	@Override
	public void onReceiveStartTimes(ReceiveStartTimesEvent evt) {
		int startIndex = fillSectionStart(oldSection.getStartTimeId(), evt.getAction().getStartTimes());
		view.getSectionStartTimeComboBox().setSelectedIndex(startIndex);
	}
	
	@Override
	public void onReceiveEndTimes(ReceiveEndTimesEvent evt) {
		int endIndex = fillSectionEnd(oldSection.getEndTimeId(), evt.getAction().getEndTimes());
		view.getSectionEndTimeComboBox().setSelectedIndex(endIndex);
	}
	

	@Override
	public int fillSectionTerms(int initTermValue, List<Terms> termsList) {
		int initTermIndex = -1;
		
		ListBox term = view.getTermComboBox();
		term.clear();

		Iterator<Terms> iterator = termsList.iterator();
		int index = 0;
		while(iterator.hasNext()) {
			Terms cs = iterator.next();
			term.addItem(cs.getName(), Integer.toString(cs.getId()));
			if(cs.getId() == initTermValue) {
				initTermIndex = index;
			}
			index++;
		}
		
		return initTermIndex;
	}

	@Override
	public int fillSectionTypes(int initTypeValue, List<SectionType> typesList) {
		int initTypeIndex = -1;

		ListBox type = view.getSectionTypeComboBox();
		type.clear();

		Iterator<SectionType> iterator = typesList.iterator();
		int index = 0;
		while(iterator.hasNext()) {
			SectionType cs = iterator.next();
			type.addItem(cs.getType(), Integer.toString(cs.getId()));
			if(cs.getId() == initTypeValue) {
				initTypeIndex = index;
			}
			index++;
		}
		
		return initTypeIndex;
	}

	@Override
	public int fillSectionStart(int initStartTimeValue, List<StartTime> startTimeList) {
		int initStartTimeIndex = -1;

		ListBox start = view.getSectionStartTimeComboBox();
		start.clear();

		Iterator<StartTime> iterator = startTimeList.iterator();
		int index = 0;
		while(iterator.hasNext()) {
			StartTime cs = iterator.next();
			start.addItem(cs.getTime().toString(), Integer.toString(cs.getId()));
			if(cs.getId() == initStartTimeValue) {
				initStartTimeIndex = index;
			}
			index++;
		}
		
		return initStartTimeIndex;
	}

	@Override
	public int fillSectionEnd(int initEndTimeValue, List<EndTime> endTimeList) {
		int initEndTimeIndex = -1;

		ListBox end = view.getSectionEndTimeComboBox();
		end.clear();

		Iterator<EndTime> iterator = endTimeList.iterator();
		int index = 0;
		while(iterator.hasNext()) {
			EndTime cs = iterator.next();
			end.addItem(cs.getTime().toString(), Integer.toString(cs.getId()));
			if(cs.getId() == initEndTimeValue) {
				initEndTimeIndex = index;
			}
			index++;
		}
		
		return initEndTimeIndex;
	}


	//determine which days are selected and stick them together as a string
	@Override
	public String determineDays() {
		CheckBox monday = view.getMondayCheckBox();
		CheckBox tuesday = view.getTuesdayCheckBox();
		CheckBox wednesday = view.getWednesdayCheckBox();
		CheckBox thursday = view.getThursdayCheckBox();
		CheckBox friday = view.getFridayCheckBox();

		//Turn checked boxes back into list
		StringBuilder days = new StringBuilder();

		if(monday.getValue()) {
			days.append(monday.getText());
		}
		if(tuesday.getValue()) {
			days.append(tuesday.getText());
		}
		if(wednesday.getValue()) {
			days.append(wednesday.getText());
		}
		if(thursday.getValue()) {
			days.append(thursday.getText());
		}		
		if(friday.getValue()) {
			days.append(friday.getText());
		}

		return days.toString();		
	}

	@Override
	public void editSection() {
		ListBox term = view.getTermComboBox();
		ListBox type = view.getSectionTypeComboBox();
		ListBox start = view.getSectionStartTimeComboBox();
		ListBox end = view.getSectionEndTimeComboBox();

		//create the new section
		CourseSections newSection = new CourseSections();
		newSection.setTermsName(term.getItemText(term.getSelectedIndex()));
		newSection.setSectionType(type.getItemText(type.getSelectedIndex()));
		newSection.setStartTime(Time.valueOf(start.getItemText(start.getSelectedIndex())));
		newSection.setEndTime(Time.valueOf(end.getItemText(end.getSelectedIndex())));
		newSection.setDays(this.determineDays());
		newSection.setCoursesNumber(oldSection.getCoursesNumber());
		newSection.setCoursesTitle(oldSection.getCoursesTitle());
		newSection.getSectionId();

		eventBus.fireEvent(new LoadEditCourseEvent(new LoadEditCourseAction(course)));
		
		Window.alert("You created a section with Term: " + newSection.getTermsName() + 
				" Section Type: " + newSection.getSectionType() + 
				" Start Time: " + newSection.getStartTime() +
				" End Time: " + newSection.getEndTime() +
				" Days: " + newSection.getDays() +
				" For the course: " + newSection.getCoursesNumber() + newSection.getCoursesTitle());
	}

	@Override
	public void cancelEditSection() {
		eventBus.fireEvent(new LoadEditCourseEvent(new LoadEditCourseAction(course)));
		Window.alert("The section was not edited");
	}

}
