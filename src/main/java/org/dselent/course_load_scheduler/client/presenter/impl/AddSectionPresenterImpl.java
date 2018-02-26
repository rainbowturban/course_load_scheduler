package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadEditCourseAction;
import org.dselent.course_load_scheduler.client.action.SendGetEndTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetSectionTypesAction;
import org.dselent.course_load_scheduler.client.action.SendGetStartTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetTermsAction;
import org.dselent.course_load_scheduler.client.action.SendNewSectionAction;
import org.dselent.course_load_scheduler.client.event.LoadAddSectionEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveEndTimesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetSectionTypesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetTermsEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetEndTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetSectionTypesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetTermsEvent;
import org.dselent.course_load_scheduler.client.event.SendNewSectionEvent;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.CourseSections;
import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.SectionType;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.Terms;
import org.dselent.course_load_scheduler.client.presenter.AddSectionPresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.AddSectionView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.ListBox;
import com.google.inject.Inject;

public class AddSectionPresenterImpl extends BasePresenterImpl implements AddSectionPresenter{
	private IndexPresenter parentPresenter;
	private AddSectionView view;
	//variables to hold info from course
	private CourseSections fromCourse = new CourseSections();
	private CourseInfo course = new CourseInfo();

	@Inject
	public AddSectionPresenterImpl(IndexPresenter parentPresenter, AddSectionView view)
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
		registration = eventBus.addHandler(LoadAddSectionEvent.TYPE, this);
		eventBusRegistration.put(LoadAddSectionEvent.TYPE, registration);
		
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
	public AddSectionView getView() {
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

	@Override
	public void onLoadAddSection(LoadAddSectionEvent evt) {
		//Gather info from course
		fromCourse.setCoursesNumber(evt.getAction().getCourseInfo().getCoursesNumber());
		fromCourse.setCoursesTitle(evt.getAction().getCourseInfo().getCoursesTitle());

		//Info to return to edit course page
		course = evt.getAction().getCourseInfo();
		
		//retrieve info from DB
		retrieveTerm();
		retrieveType();
		retrieveTime();

		this.go(parentPresenter.getView().getViewRootPanel());
	}

	//gets term info about sections
	@Override
	public void retrieveTerm(){
		//Sends event to DB to retrieve terms
		eventBus.fireEvent(new SendGetTermsEvent(new SendGetTermsAction()));
	}
	
	@Override
	public void onReceiveGetTerms(ReceiveGetTermsEvent evt) {
		fillSectionTerms(evt.getAction().getTerms());
	}

	//gets section type info about sections
	@Override
	public void retrieveType(){
		//Populates types from DB
		eventBus.fireEvent(new SendGetSectionTypesEvent(new SendGetSectionTypesAction()));
	}
	
	@Override
	public void onReceiveGetSectionTypes(ReceiveGetSectionTypesEvent evt) {
		fillSectionTypes(evt.getAction().getSectionTypes());		
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
		fillSectionStart(evt.getAction().getStartTimes());
		
	}
	
	@Override
	public void onReceiveEndTimes(ReceiveEndTimesEvent evt) {
		fillSectionEnd(evt.getAction().getEndTimes());
	}

	@Override
	public void fillSectionTerms(List<Terms> termsList) {
		ListBox term = view.getTermComboBox();
		term.clear();
		
		Iterator<Terms> iterator = termsList.iterator();

		while(iterator.hasNext()) {
			Terms terms = iterator.next();
			term.addItem(terms.getName());			
		}
		view.setTermComboBox(term);
	}

	@Override
	public void fillSectionTypes(List<SectionType> typesList) {
		ListBox type = view.getSectionTypeComboBox();
		type.clear();

		Iterator<SectionType> iterator = typesList.iterator();

		while(iterator.hasNext()) {
			SectionType sectionType = iterator.next();
			type.addItem(sectionType.getType());			
		}
		view.setSectionTypeComboBox(type);
	}

	@Override
	public void fillSectionStart(List<StartTime> startTimeList) {
		ListBox start = view.getSectionStartTimeComboBox();
		start.clear();

		Iterator<StartTime> iterator = startTimeList.iterator();

		while(iterator.hasNext()) {
			StartTime startTime = iterator.next();
			start.addItem(startTime.getTime().toString());			
		}
		view.setSectionStartTimeComboBox(start);
	}

	@Override
	public void fillSectionEnd(List<EndTime> endTimeList) {
		ListBox end = view.getSectionEndTimeComboBox();
		end.clear();

		Iterator<EndTime> iterator = endTimeList.iterator();

		while(iterator.hasNext()) {
			EndTime endTime = iterator.next();
			end.addItem(endTime.getTime().toString());			
		}
		view.setSectionEndTimeComboBox(end);
	}

	//determine which days are selected and stick them together as a string
	@Override
	public String determineDays() {
		CheckBox monday = view.getMondayCheckBox();
		CheckBox tuesday = view.getTuesdayCheckBox();
		CheckBox wednesday = view.getWednesdayCheckBox();
		CheckBox thursday = view.getThursdayCheckBox();
		CheckBox friday = view.getFridayCheckBox();		

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
	public void addSection() {
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
		newSection.setCoursesNumber(fromCourse.getCoursesNumber());
		newSection.setCoursesTitle(fromCourse.getCoursesTitle());
		
		newSection.setCoursesId(fromCourse.getCoursesId());
		newSection.setDaysId(1);//not enough time to get this to work
		newSection.setTermsId(Integer.parseInt(term.getValue(term.getSelectedIndex())));
		newSection.setSectionTypeId(Integer.parseInt(type.getValue(type.getSelectedIndex())));
		newSection.setStartTimeId(Integer.parseInt(start.getValue(start.getSelectedIndex())));
		newSection.setEndTimeId(Integer.parseInt(end.getValue(end.getSelectedIndex())));
		newSection.setSectionsName(view.getGeneratedNameTextBox().getText());
		
		//fire event
		eventBus.fireEvent(new SendNewSectionEvent(new SendNewSectionAction(newSection)));
		
		//return to previous page
		eventBus.fireEvent(new LoadEditCourseEvent(new LoadEditCourseAction(course)));
	}

	//loads courses page (viewing) (TODO: work out parameters, determine between Admin/User??)
	@Override
	public void cancelAddSection() {
		eventBus.fireEvent(new LoadEditCourseEvent(new LoadEditCourseAction(course)));
		Window.alert("The section was not created");
	}
}

